const mongoose = required("mongoose");

const imageSchema = new mongoose.Schema({
  images:[{type:String,required:true}]
})

const Image = mongoose.model("image", imageSchema);

