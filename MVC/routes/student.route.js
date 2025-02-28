const express = require('express');
const {studentModel} = require('../model/student.model')
const studentRouter = express.Router();

studentRouter.get("/", (req, res) => {
    res.send("welcome to students home page");

})

studentRouter.post("/register", async (req, res) => {
    try {
        const data = req.body;
        const user = new studentModel(data);
        await user.save();
        res.send({ msg: "student got registered" });

    } catch (error) {
        res.send({ msg: error.message });
    }

});
studentRouter.get("/read", async (req, res) => {
    try {
        const user = await studentModel.find();
        res.send({ Data: user })
    } catch (error) {
        res.send({ msg: error.message });
    }
})

studentRouter.patch("/update/:id", async (req, res) => {
    const ID = req.params.id;
    const payload = req.body
    try {
        await studentModel.findByIdAndUpdate({ _id: ID }, payload);
        res.send({ msg: "student data has updated" })

    } catch (error) {
        res.send({ msg: error.message });
    }
})

studentRouter.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id;

    try {
        await studentModel.findByIdAndDelete({ _id: ID });
        res.send({ msg: "student data has deleted" })

    } catch (error) {
        res.send({ msg: error.message });
    }
})

module.exports ={studentRouter}