require('dotenv').config()
const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.mongoURL);
// console.log(process.env.mongoURL);  // Debug the value of mongoURL

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    language: { type: String, required: true },
    isActive: { type: Boolean, required: true }
},
{
    versionKey: false
});

const userModel = mongoose.model('User', userSchema);

module.exports = { connection, userModel };
