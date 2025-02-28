const mongooose = require("mongoose");

const noteSchema = mongooose.Schema({
  title: String,
  body: String,
  user: String
});

const NoteModel = mongooose.model("note", noteSchema);

module.exports = {
  NoteModel
};
