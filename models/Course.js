const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: {
    type: String
  },
});

module.exports = mongoose.model("courses", courseSchema);
