import mongoose, { Schema } from "mongoose";

const schema= new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    brand:{
        type:Boolean,
        require:true
    }
});

const Company=mongoose.model('Company', schema);
export default Company;