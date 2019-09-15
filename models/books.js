const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    key: { type: String, required: false },
    id: { type: String, required: false },
    image: { type: String, required: false },
    link: { type: String, required: false },
    title: { type: String, required: false },
    author: { type: String, required: false },
    description: { type: String, required: false }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
