import mongoose from "mongoose";
import Garment from "./Garment.model.js";

const schema = new mongoose.Schema({ 
      username: {
        type: String,
        required: true 
      },
      password: {
        type: String,
        required: true 
      },
       garments:[{
         type: mongoose.Schema.Types.ObjectId, ref:'Garment',
         required: false
       }],
      // garments:[Garment.schema],
      
});
//Shema is the attributes that 
//the item will have 
const Client = mongoose.model('Client', schema);
export default Client;