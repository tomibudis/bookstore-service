"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const book_query_1 = require("../repository/book.query");
class BookService {
    constructor() {
        this.bookRepository = new book_query_1.BookRepository();
    }
    getAllBooks(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bookRepository.findAll({
                limit: params.limit,
                keyword: params.keyword,
                offset: params.limit * (params.page - 1),
            });
        });
    }
    getDetailBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bookRepository.findById(id);
        });
    }
    createBook(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bookRepository.insertBook(data);
        });
    }
}
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map