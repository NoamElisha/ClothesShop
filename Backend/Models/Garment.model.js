import mongoose from "mongoose";

const schema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true // must give a name in order to save in the data base
      },
      price: {
        type: Number,
        required: true 
      },
      picture:{
        type: String,
        required: false
      }

});
//Shema is the filed that 
//the item will have 
const Garment = mongoose.model('Garment', schema);
export default Garment;