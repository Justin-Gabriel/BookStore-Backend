import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    publishDate: {
        type: Date,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}, { timestamps: true })

const Book = mongoose.model("Book", bookSchema);

export default Book;