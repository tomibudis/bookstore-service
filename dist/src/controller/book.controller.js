"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_service_1 = require("../service/book.service");
const bookService = new book_service_1.BookService();
class BookController {
    async createBookController(req, res) {
        const books = await bookService.createBook(req.body);
        res.status(201).json({ ...books.at(0) });
    }
    async listBookController(req, res) {
        const books = await bookService.getAllBooks(req.params);
        res.status(200).json(books);
    }
    async detailBookController(req, res) {
        const book = await bookService.getDetailBook(req.body.id);
        res.status(200).json(book);
    }
}
exports.BookController = BookController;
//# sourceMappingURL=book.controller.js.map