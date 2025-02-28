const express = require('express');
const {userModel} = require('../model/user.model')
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send("welcome to routes home page");

})

userRouter.post("/register", async (req, res) => {
    try {
        const data = req.body;
        const user = new userModel(data);
        await user.save();
        res.send({ msg: "user got registered" });

    } catch (error) {
        res.send({ msg: error.message });
    }

});
userRouter.get("/read", async (req, res) => {
    try {
        const user = await userModel.find();
        res.send({ Data: user })
    } catch (error) {
        res.send({ msg: error.message });
    }
})

userRouter.patch("/update/:id", async (req, res) => {
    const ID = req.params.id;
    const payload = req.body
    try {
        await userModel.findByIdAndUpdate({ _id: ID }, payload);
        res.send({ msg: "user data has updated" })

    } catch (error) {
        res.send({ msg: error.message });
    }
})

userRouter.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id;

    try {
        await userModel.findByIdAndDelete({ _id: ID });
        res.send({ msg: "user data has deleted" })

    } catch (error) {
        res.send({ msg: error.message });
    }
})

module.exports ={userRouter}