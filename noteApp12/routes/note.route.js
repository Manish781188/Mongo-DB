const express = require("express");
const { NoteModel } = require("../models/note.model");

const noteRouter = express.Router();

noteRouter.get("/", async (req, res) => {
  try {
    const note = await NoteModel.find();
    res.send(note);
  } catch (error) {
    res.send({ msg: "can't read the notes", error: error.message });
  }
});

noteRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const note = new NoteModel(payload);
    await note.save();
    res.send({ msg: "notes created successfully" });
  } catch (error) {
    res.send({ msg: "can't read the notes", error: error.message });
  }
});

noteRouter.delete("/delete/:id", async (req, res) => {
  const noteId = req.params.id;
  try {
    await NoteModel.findByIdAndDelete({ _id: noteId });
    res.send({ msg: "notes deleted successfully" });
  } catch (error) {
    res.send({ msg: "can't delete the notes", error: error.message });
  }
});


module.exports = {
    noteRouter
}