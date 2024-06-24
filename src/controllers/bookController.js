import { creatingBook, getAllBooks, getBooksByName } from "../services/bookService.js";

export const createBook = async (req, res) => {
    const { name,description, publishDate, price } = req.body;

    try {
        const newBook = await creatingBook(name,description, publishDate, price)
        res.status(201).json({data: newBook, message: 'Project created successfully', error: false})
    } catch (error) {
        res.json({ data: null, message: error.message, error: true})
    }
}

export const getBooks = async (req, res) => {
    try {
        const allBooks = await getAllBooks();
        res.status(201).json({data: allBooks, message: 'Books fetched successfully', error: false})
    } catch (error) {
        res.status(400).json({data: null, message: error.message, error: false})
    }
}

export const searchBooks = async (req, res) => {
    const { name } = req.query;
    try {
        const allBooks = await getBooksByName(name);
        res.status(201).json({data: allBooks, message: 'Books fetched successfully', error: false})
    } catch (error) {
        res.status(400).json({data: null, message: error.message, error: false})
    }
}
