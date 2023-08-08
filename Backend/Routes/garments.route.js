import express from "express";
import Garment from "../Models/Garment.model.js";// important to add .js!

let router = express.Router();

router.route('/').get (async (req, res) => { 
    const data = await Garment.find(); 
    res.send(data);
 })

export default router;