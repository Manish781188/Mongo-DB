const mongoose = require('mongoose');


const  connection = mongoose.connect("mongodb://127.0.0.1:27017/one")
const schema = mongoose.schema({
    name :{type:String , required:true},
    age : {type:Number , required:true},
    city : {type:String , required:true}
})
const model = connection.model('user',)

module.exports = {connection,model}