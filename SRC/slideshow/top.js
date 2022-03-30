 const express = require ("express");


 const app = express();

 app.use(express.json());

 app.get("/users",(req,res)=>{
   try{
    const user= create(req.body);
    return res.send(user);
   }
   catch(e){
     return res.send({message:e});
   } 
 })

 app.listen(5500,()=>{
   console.log("port listening on 5500")
 })

//  TvSchema = new mongoose.Schema({
//    brandname:{type:String,required:true},
//     model:{type:String,required:true},
    
//  }) 