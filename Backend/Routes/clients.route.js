import  express from "express";
import Client from "../Models/Client.model.js";

let router= express.Router();


//Midaleware to parse the json data that i get from the req
// router.use(express.json());

// access to Moongose client model
const ClientModel = Client;

router.route('/')
.get(async (req, res) => {  //return all the clients
    try{
    // Find all client's usernames
    const data = await ClientModel.find({}); // 1- mean: include 0 mean: not
    // give me only the data of the username
    res.json(data);
    }catch(error) {
        res.status(500).json({
            error: 'an error occured',
            message: error.message
        });
    }
})
.post(async (req,res) =>{
    try{ // get username paswword and garments and add a new client
        
        const data =  new ClientModel({
            username:req.body.username,
            password:req.body.password,
            garments: req.body.garments
        });
        const val = await data.save().populate("garments").exec();
        res.status(200).json(val);
    } catch(error){
        res.status(500).json({ 
            error:'an error occurred',
            message: error.message
    });

    }
})
router.route('/usernames')
.get(async (req, res) => {  // return all the usernames
    try{
    // Find all client's usernames
    const data = await ClientModel.find({}, {username: 1}); // 1- mean: include 0 mean: not
    // give me only the data of the username
    const usernames = data.map(client=> client.username);
    res.json(data);
    }catch(error) {
        res.status(500).json({
            error: 'an error occured',
            message: error.message
        });
    }
})
.post(async (req, res) => { //get username and passowrd and return me the person
  try {
      const { username, password } = req.body;

      // Find a client with the given username and password
      const client = await ClientModel.findOne({ username, password }).populate("garments").exec();

      if (client) {
          res.status(200).json(client);
      } else {
          res.status(404).json({
              error: 'client not found',
              message: 'No client with the provided username and password'
          });
      }
  } catch (error) {
      res.status(500).json({
          error: 'an error occurred',
          message: error.message
      });
  }
});
router.route('/garments/:clientId') // update garments to the client  
.put(async (req, res) => {
    try {
        const { clientId } = req.params;
        const { garmentId } = req.body;

        // Find the client by clientId
        const client = await ClientModel.findById(clientId);

        if (!client) {
            return res.status(404).json({
                error: 'client not found',
                message: 'No client with the provided id'
            });
        }

        // Make sure the client has a garments array
        if (!client.garments) {
            client.garments = [];
        }

        // Add the new garmentId to the client's garments array
        client.garments.push(garmentId);

        // Save the updated client
        const updatedClient = await client.save();
        res.status(200).json(await updatedClient.populate("garments"));
    } catch (error) {
        res.status(500).json({
            error: 'an error occurred',
            message: error.message
        });
    }
});
router.route('/garments/:clientId/:garmentId')// delete garment by the garment id
.delete(async (req, res) => {
    try {
        const { clientId, garmentId } = req.params;

        // Find the client by clientId
        const client = await ClientModel.findById(clientId);

        if (!client) {
            return res.status(404).json({
                error: 'client not found',
                message: 'No client with the provided id'
            });
        }

        // Remove the specified garmentId from the client's garments array
        client.garments = client.garments.filter(id => id.toString() !== garmentId);

        // Save the updated client
        const updatedClient = await client.save();
        const populatedClient = await updatedClient.populate("garments");

        res.status(200).json(populatedClient);
    } catch (error) {
        res.status(500).json({
            error: 'an error occurred',
            message: error.message
        });
    }
});

export default router;