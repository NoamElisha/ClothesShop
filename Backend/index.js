import express from "express";
import Garment from "./Models/Garment.model.js";
import mongoConnect from "./config/MongoConnect.js";// the js is important 
import garments from "./Routes/garments.route.js";
import companies from "./Routes/companies.route.js";
import clients from "./Routes/clients.route.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const env_path = "./config/.env";
dotenv.config({path: env_path});

const app = express()


// conntect to db
mongoConnect(); // start my data base

// new Garment({ // the syntax the pass data to the data base
// name:"pens",
// price: 72
// }).save(); // 

//  new Client({ // the syntax the pass data to the data base
//  name:"filerAluf",
//  password: "abcd",
//  //garments: []
//  }).save(); // 

//  new Company({ // the syntax the pass data to the data base
//  name:"adidas",
//  brand: true
//  }).save(); // 

app.use(bodyParser.json());

app.get('/',async (req, res) => { // a call to http(req) to main directoy(page) 
const data = await Garment.find(); // you do async when you have await, await is a call that
// tells  the computer, not continue with the code until i finish it 
res.send(data);
})

//Routs
app.use("/garments", garments);
// use the garments file to hande 
// endpoints that start with /garments
app.use("/companies", companies);
app.use("/clients", clients);


 

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

