const mongoose = require("mongoose");

const TvSchema = new mongoose.Schema({
    brand:{type:String,required:true},
    // model: {type:String,required:true},
    gallery:[{type:String,required:true}],
    // woprice: {type:String,required:true},
    // wprice: {type:String,required:true},
    // size: {type:String,required:true},
    // resolution: {type:String,required:true},
    // connectivity: {type:String,required:true},
    // Op: {type:String,required:true},
},
{
    timestamps:true,
    versionKey:false,
});

const Tv =  mongoose.model("tv",TvSchema);

module.exports = Tv;

