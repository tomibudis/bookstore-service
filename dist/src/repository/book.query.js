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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const database_1 = require("../config/database");
const book_entity_1 = __importDefault(require("../entity/book.entity"));
class BookRepository {
    findAll(_a) {
        return __awaiter(this, arguments, void 0, function* ({ limit, offset, keyword }) {
            return database_1.db.query.books.findMany({
                limit,
                offset,
                where: (book, { ilike }) => ilike(book.title, `%${keyword}%`),
            });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return database_1.db.query.books.findFirst({ where: (0, drizzle_orm_1.eq)(book_entity_1.default.id, id) });
        });
    }
    insertBook(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return database_1.db.insert(book_entity_1.default).values(data).returning();
        });
    }
    multipleInsertBook(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return database_1.db.insert(book_entity_1.default).values(data).returning();
        });
    }
}
exports.BookRepository = BookRepository;
//# sourceMappingURL=book.query.js.map