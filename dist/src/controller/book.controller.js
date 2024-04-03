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
exports.BookController = void 0;
const book_service_1 = require("../service/book.service");
const bookService = new book_service_1.BookService();
class BookController {
    createBookController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield bookService.createBook(req.body);
            res.status(201).json(Object.assign({}, books.at(0)));
        });
    }
    listBookController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield bookService.getAllBooks(req.params);
            res.status(200).json(books);
        });
    }
    detailBookController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield bookService.getDetailBook(req.body.id);
            res.status(200).json(book);
        });
    }
}
exports.BookController = BookController;
//# sourceMappingURL=book.controller.js.map