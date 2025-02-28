const mongoose = require('mongoose');
const connection = mongoose.connect("mongodb://127.0.0.1:27017/second");

const userSchema = mongoose.Schema({
    name :{type:String ,require:true},
    age :{type:Number ,require:true},
    city :{type:String ,require:true},
    language :{type:String ,require:true},
    isActive :{type:Boolean ,require:true}
}, 
{
    versionKey :false
})

const userModel = mongoose.model('User',userSchema);

module.exports = { connection ,userModel }