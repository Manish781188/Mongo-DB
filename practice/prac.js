const express = require('express');

const {connection}  = require("./db");

const app = express();


app.listen(8080 ,()=>{
    console.log("listening on 8080");
    
});