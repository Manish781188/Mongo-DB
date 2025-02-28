const express = require("express")
require('dotenv').config()
const jwt = require("jsonwebtoken")
const { connection } = require("./Config/db1")
const { UserModel } = require("./model/user.model")
const app = express();
app.use(express.json())

app.get("/home", (req, res) => {
    res.send("welcome to autontication home page")
})

app.post("/signup", async (req, res) => {
    const payload = req.body
    try {
        const user = new UserModel(payload)
        await user.save()
        res.send({ msg: "signup complete !" })  
    } catch (error) {
        res.send({ msg: error.message })
    }
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = UserModel.find({ email, password })
        if (user) {
            var token = jwt.sign({ student: 'yugal' }, 'coding');
            // const token = 123
            res.send({ msg: "login successful", token })
        }
        else {
            res.send("wrong users")
        }
    } catch (error) {
        res.send({ msg: error.message })
    }

})

app.get("/data", (req, res) => {
    const token = req.headers.authorization

    jwt.verify(token, "coding", (err, decoded) => {
        if (decoded) {
            res.send("data page ....[]")
        } else {
            res.send("login first")
        }
    });
})
// console.log(decoded.foo) // bar
// try {
//     if (token) {
//         res.send("data page ....[]")

//     } else {
//         res.send("login first")
//     }
// } catch (error) {
//     res.send({ msg: error.message })
// }










app.get("/about", (req, res) => {
    res.send("About page")
})

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log({ "msg": error.message })
    }

    console.log("server is running at port 8080")
})