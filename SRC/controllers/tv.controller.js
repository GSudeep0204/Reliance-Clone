const express = require("express");
const multer = require("multer");

const router = express.Router();
const Tv = require("../models/tv.model");
const Mobile = require("../models/mobile.model")
const Laptop = require("../models/laptop.model")
const Watch = require("../models/watch.model")

router.post("/tvs",async(req,res)=>{
    try{
      const tv = await Tv.create(req.body);
      return res.status(201).send(tv);
    }
    catch(e){
      return res.send({message:e});
    }
})

router.get("/tvs",async(req,res)=>{
    try{
      const tv = await Tv.find().lean().exec();
      return res.status(201).send(tv);
    }
    catch(e){
      return res.send({message:e});
    }
})

router.get("/tvs/:id",async(req,res)=>{
    try{
      const tv = await Tv.findById(req.params.id).lean().exec();
      return res.status(201).send(tv);
    }
    catch(e){
      return res.send({message:e});
    }
})

router.patch("/tvs/:id",async(req,res)=>{
    try{
      const tv = await Tv.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
      return res.status(201).send(tv);
    }
    catch(e){
      return res.send({message:e});
    }
})

router.delete("/tvs/:id",async(req,res)=>{
    try{
      const tv = await Tv.findByIdAndDelete(req.params.id);
      return res.status(201).send(tv);
    }
    catch(e){
      return res.send({message:e});
    }
})


router.post("/mobiles",async(req,res)=>{
  try{
    const mobile = await Mobile.create(req.body);
    return res.status(201).send(mobile);
  }
  catch(e){
    return res.send({message:e});
  }
})

router.get("/mobiles",async(req,res)=>{
  try{
    const mobile = await Mobile.find().lean().exec();
    return res.status(201).send(mobile);
  }
  catch(e){
    return res.send({message:e});
  }
})

router.get("/mobiles/:id",async(req,res)=>{
  try{
    const mobile = await Mobile.findById(req.params.id).lean().exec();
    return res.status(201).send(mobile);
  }
  catch(e){
    return res.send({message:e});
  }
})

router.patch("/mobiles/:id",async(req,res)=>{
  try{
    const mobile = await Mobile.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(201).send(mobile);
  }
  catch(e){
    return res.send({message:e});
  }
})

router.delete("/mobiles/:id",async(req,res)=>{
  try{
    const mobile = await Mobile.findByIdAndDelete(req.params.id);
    return res.status(201).send(mobile);
  }
  catch(e){
    return res.send({message:e});
  }
})


router.post("/laptops",async(req,res)=>{
  try{
    const laptop = await Laptop.create(req.body);
    return res.status(201).send(laptop);
  }
  catch(e){
    return res.send({message:e});
  }
})

router.get("/laptops",async(req,res)=>{
  try{
    const laptop = await Laptop.find().lean().exec();
    return res.status(201).send(laptop);
  }
  catch(e){
    return res.send({message:e});
  }
})

router.get("/laptops/:id",async(req,res)=>{
  try{
    const laptop = await Laptop.findById(req.params.id).lean().exec();
    return res.status(201).send(laptop);
  }
  catch(e){
    return res.send({message:e});
  }
})

router.patch("/laptops/:id",async(req,res)=>{
  try{
    const laptop = await Laptop.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(201).send(laptop);
  }
  catch(e){
    return res.send({message:e});
  }
})

router.delete("/laptops/:id",async(req,res)=>{
  try{
    const laptop = await Laptop.findByIdAndDelete(req.params.id);
    return res.status(201).send(laptop);
  }
  catch(e){
    return res.send({message:e});
  }
})

router.post("/watches",async(req,res)=>{
  try{
    const watch = await Watch.create(req.body);
    return res.status(201).send(watch);
  }
  catch(e){
    return res.send({message:e});
  }
})

router.get("/watches",async(req,res)=>{
  try{
    const watch = await Watch.find().lean().exec();
    return res.status(201).send(watch);
  }
  catch(e){
    return res.send({message:e});
  }
})

router.get("/watches/:id",async(req,res)=>{
  try{
    const watch = await Watch.findById(req.params.id).lean().exec();
    return res.status(201).send(watch);
  }
  catch(e){
    return res.send({message:e});
  }
})

router.patch("/watches/:id",async(req,res)=>{
  try{
    const watch = await Watch.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    return res.status(201).send(watch);
  }
  catch(e){
    return res.send({message:e});
  }
})

router.delete("/watches/:id",async(req,res)=>{
  try{
    const watch = await Watch.findByIdAndDelete(req.params.id);
    return res.status(201).send(watch);
  }
  catch(e){
    return res.send({message:e});
  }
})

module.exports = router;