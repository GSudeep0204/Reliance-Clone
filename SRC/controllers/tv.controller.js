const express = require("express");
const multer = require("multer");

const router = express.Router();
const Tv = require("../models/tv.model");

router.post("",async(req,res)=>{
    try{
      const tv = await Tv.create(req.body);
      return res.status(201).send(tv);
    }
    catch(e){
      return res.send({message:e});
    }
})

router.get("",async(req,res)=>{
    try{
      const tv = await Tv.find().lean().exec();
      return res.status(201).send(tv);
    }
    catch(e){
      return res.send({message:e});
    }
})

router.get("/:id",async(req,res)=>{
    try{
      const tv = await Tv.findById(req.params.id).lean().exec();
      return res.status(201).send(tv);
    }
    catch(e){
      return res.send({message:e});
    }
})

router.patch("/:id",async(req,res)=>{
    try{
      const tv = await Tv.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
      return res.status(201).send(tv);
    }
    catch(e){
      return res.send({message:e});
    }
})

router.delete("/:id",async(req,res)=>{
    try{
      const tv = await Tv.findByIdAndDelete(req.params.id);
      return res.status(201).send(tv);
    }
    catch(e){
      return res.send({message:e});
    }
})

module.exports = router;