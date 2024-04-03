"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const book_query_1 = require("../repository/book.query");
class BookService {
    bookRepository = new book_query_1.BookRepository();
    async getAllBooks(params) {
        return this.bookRepository.findAll({
            limit: params.limit,
            keyword: params.keyword,
            offset: params.limit * (params.page - 1),
        });
    }
    async getDetailBook(id) {
        return this.bookRepository.findById(id);
    }
    async createBook(data) {
        return this.bookRepository.insertBook(data);
    }
}
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map