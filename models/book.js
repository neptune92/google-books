const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema ({
        title: {
            type: String,
            required: true
        },

        authors: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        image: {
            String,
            required: true
        },

        link: {
            String,
            required: true
        }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;