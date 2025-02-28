const express = require("express");
const { connection} = require("./database")
const {userRouter} = require("./routes/user.route")
const {studentRouter} = require('./routes/student.route')
require("dotenv").config();

const app = express();

app.use(express.json())

app.use("/user",userRouter);
app.use("/student",studentRouter);


app.get("/", (req, res) =>{
    res.send("welcome  to page");
})

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("connected to DB");

    } catch (error) {
        console.log("con't connected to DB", error);

    }
    console.log("server is listening on port 8000");

})