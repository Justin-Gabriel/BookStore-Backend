import { format } from 'date-fns';
import Book from "../models/bookModels.js";



export const creatingBook = async (name,description, publishDate, price) => {
    try {
        const book = await Book.create({ name,description, publishDate, price });
        return {
            ...book.toJSON(),
            publishDate: format(new Date(book.publishDate), 'dd/MM/yyyy')
        };

    } catch (e) {
        throw new Error(e.message);
    }

}

export const getAllBooks = async () => {
    try {
        const allBooks = await Book.find().select('name description publishDate price').sort({createdAt: -1});
        // Format publishDate to dd-mm-yyyy
        const formattedBooks = allBooks.map(book => ({
            ...book.toJSON(),
            publishDate: book.publishDate.toLocaleDateString('en-GB') // Adjust locale as per your requirement
        }));
        return formattedBooks
    } catch (error) {
        throw new Error(e.message);
    }
}


export const getBooksByName = async (name) => {
    try {
        const allBooks = await Book.find({name}).select('name description publishDate price').sort({createdAt: -1});

        // Format publishDate to dd-mm-yyyy
        const formattedBooks = allBooks.map(book => ({
            ...book.toJSON(),
            publishDate: book.publishDate.toLocaleDateString('en-GB') 
        }));
        return formattedBooks
    } catch (error) {
        throw new Error(e.message);
    }
}