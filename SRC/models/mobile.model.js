const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema({
    type :{type:String,required:true},
    brand:{type:String,required:true},
    model: {type:String,required:true},
    gallery:[{type:String,required:true}],
    woprice: {type:String,required:true},
    wprice: {type:String,required:true},
    keyFeatures :[{type:String,required:true}]
},
{
    timestamps:true,
    versionKey:false,
});

const Mobile =  mongoose.model("mobile",mobileSchema);

module.exports = Mobile;

