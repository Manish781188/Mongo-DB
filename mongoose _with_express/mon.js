const express = require("express");
const { connection, userModel } = require("./db")
const app = express();
app.use(express.json())
app.get("/", (req, res) => {
    res.send("welcome to home page");

})

app.post("/register", async (req, res) => {
    try {
        const data = req.body;
        const user = new userModel(data);
        await user.save();
        res.send({ msg: "user got registered" });

    } catch (error) {
        res.send({ msg: error.message });
    }

});
app.get("/read", async (req, res) => {
    try {
        const user = await userModel.find();
        res.send({ Data: user })
    } catch (error) {
        res.send({ msg: error.message });
    }
})

app.patch("/update/:id", async (req, res) => {
    const ID = req.params.id;
    const payload = req.body
    try {
        await userModel.findByIdAndUpdate({ _id: ID }, payload);
        res.send({ msg: "user data has updated" })

    } catch (error) {
        res.send({ msg: error.message });
    }
})

app.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id;

    try {
        await userModel.findByIdAndDelete({ _id: ID });
        res.send({ msg: "user data has deleted" })

    } catch (error) {
        res.send({ msg: error.message });
    }
})
app.listen(8080, async () => {
    try {
        await connection;
        console.log("connected to DB");

    } catch (error) {
        console.log("con't connected to DB", error);

    }
    console.log("server is listening on port 8080");

})