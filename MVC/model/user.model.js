const mongoose = require('mongoose');

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


module.exports = {userModel }; 