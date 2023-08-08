import express from "express";
import Company from "../Models/Company.model.js";

let router= express.Router();

router.route('/').get(async (req,res)=>{
    const data= await Company.find();
    res.send(data);
})

export default router;