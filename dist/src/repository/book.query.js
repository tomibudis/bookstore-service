"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const database_1 = require("../config/database");
const book_entity_1 = __importDefault(require("../entity/book.entity"));
class BookRepository {
    async findAll({ limit, offset, keyword }) {
        return database_1.db.query.books.findMany({
            limit,
            offset,
            where: (book, { ilike }) => ilike(book.title, `%${keyword}%`),
        });
    }
    async findById(id) {
        return database_1.db.query.books.findFirst({ where: (0, drizzle_orm_1.eq)(book_entity_1.default.id, id) });
    }
    async insertBook(data) {
        return database_1.db.insert(book_entity_1.default).values(data).returning();
    }
    async multipleInsertBook(data) {
        return database_1.db.insert(book_entity_1.default).values(data).returning();
    }
}
exports.BookRepository = BookRepository;
//# sourceMappingURL=book.query.js.map