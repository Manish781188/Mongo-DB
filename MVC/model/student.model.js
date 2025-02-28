const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    language: { type: String, required: true },
    isActive: { type: Boolean, required: true }
},
{
    versionKey: false
});


const studentModel = mongoose.model('Student', studentSchema);

module.exports = {studentModel}; 