const express = require("express");
const { connection } = require("./db");
const {userRouter} = require("./routes/user.route")
const {noteRouter} = require("./routes/note.route")
const {auth} = require("./middleware/auth.middleware")
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors())


app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.use("/user",userRouter);

app.use(auth);
app.use("/note",noteRouter);


app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log({ msg: "can't connect to db", error: error.message });
  }

  console.log("server is running at port 8080");
});
