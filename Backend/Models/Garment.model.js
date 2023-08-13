import mongoose from "mongoose";

const schema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true 
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