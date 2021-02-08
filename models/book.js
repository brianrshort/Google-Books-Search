const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//title image link authors description

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  // url string for thumbnail image
  image: {
    type: String,
    required: true
  },
  // url for recipe web page - unique index
  link: {
    type: String,
    required: true
  },
  authors: {
      type: Array,
      required: true
  },
  description: {
      type: String,
      required: true
  }

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;