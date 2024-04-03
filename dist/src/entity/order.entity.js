"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersRelations = exports.orders = exports.statusEnum = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const pg_core_1 = require("drizzle-orm/pg-core");
const book_entity_1 = __importDefault(require("./book.entity"));
const user_entity_1 = __importDefault(require("./user.entity"));
exports.statusEnum = (0, pg_core_1.pgEnum)('status', ['success', 'canceled', 'pending']);
/**
 * @openapi
 * components:
 *  schemas:
 *    OrderSchema:
 *      type: object
 *      required:
 *        - userId
 *        - bookId
 *      properties:
 *        userId:
 *          type: number
 *          default: 2
 *        bookId:
 *          type: number
 *          default: 3
 *    OrderSchemaResponse:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        user_id:
 *          type: number
 *        book_id:
 *          type: number
 *        status:
 *          type: string
 *        created_at:
 *          type: number
 */
exports.orders = (0, pg_core_1.pgTable)('orders', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    userId: (0, pg_core_1.integer)("user_id").notNull().references(() => user_entity_1.default.id),
    bookId: (0, pg_core_1.integer)("book_id").notNull().references(() => book_entity_1.default.id),
    status: (0, exports.statusEnum)('status'),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow(),
});
exports.ordersRelations = (0, drizzle_orm_1.relations)(exports.orders, ({ one }) => ({
    book: one(book_entity_1.default, {
        fields: [exports.orders.bookId],
        references: [book_entity_1.default.id]
    }),
    user: one(user_entity_1.default, {
        fields: [exports.orders.userId],
        references: [user_entity_1.default.id]
    })
}));
exports.default = exports.orders;
//# sourceMappingURL=order.entity.js.map