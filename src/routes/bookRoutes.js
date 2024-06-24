import express from 'express';
import validateRequest from '../middleware/validRequest.js';
import { getBooks, createBook, searchBooks } from '../controllers/bookController.js';
import { createBookSchema } from '../utils/joiSchemas.js'

const router = express.Router();

router.post('/create-book',validateRequest(createBookSchema),  createBook)
router.get('/get-books',  getBooks)
router.get('/search', searchBooks);

export default router;