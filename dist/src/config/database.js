"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.pool = void 0;
require("dotenv/config");
const node_postgres_1 = require("drizzle-orm/node-postgres");
const pg_1 = require("pg");
const user_entity_1 = require("../entity/user.entity");
const order_entity_1 = __importDefault(require("../entity/order.entity"));
const book_entity_1 = __importDefault(require("../entity/book.entity"));
exports.pool = new pg_1.Pool({
    connectionString: process.env.POSTGRES_URL,
});
exports.db = (0, node_postgres_1.drizzle)(exports.pool, { schema: { users: user_entity_1.users, orders: order_entity_1.default, books: book_entity_1.default } });
//# sourceMappingURL=database.js.map