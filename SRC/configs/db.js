const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb+srv://sudeep:1234@cluster0.rhmo3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

module.exports = connect;