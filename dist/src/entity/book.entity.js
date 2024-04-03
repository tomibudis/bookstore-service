"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.books = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
/**
 * @openapi
 * components:
 *   schemas:
 *     BookSchema:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         title:
 *           type: string
 *           default: Software Engineering
 *         writer:
 *           type: string
 *           default: Dan Abramov
 *         coverImage:
 *           type: string
 *           default: http://images.com
 *         point:
 *           type: number
 *           default: 3
 *         tag:
 *           type: array
 *           default: ['engineering', 'software', 'engineering']
 *     BookSchemaResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/BookSchema'
 *         - type: object
 *           properties:
 *             _id:
 *               type: string
 */
exports.books = (0, pg_core_1.pgTable)('books', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    title: (0, pg_core_1.text)('title'),
    writer: (0, pg_core_1.text)('writer'),
    coverImage: (0, pg_core_1.text)('cover_image'),
    point: (0, pg_core_1.integer)('point'),
    tag: (0, pg_core_1.text)('tag').array(),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow(),
});
exports.default = exports.books;
//# sourceMappingURL=book.entity.js.map