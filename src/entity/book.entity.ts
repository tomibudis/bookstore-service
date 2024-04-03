import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';

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
export const books = pgTable('books', {
  id: serial('id').primaryKey(),
  title: text('title'),
  writer: text('writer'),
  coverImage: text('cover_image'),
  point: integer('point'),
  tag: text('tag').array(),
  createdAt: timestamp('created_at').defaultNow(),
});

export default books;