const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const Tv = require("./controllers/tv.controller");
const connect = require("./configs/db");

app.use("",Tv);


app.listen(5500,()=>{
    console.log("port listening on 5500");
    connect();
})