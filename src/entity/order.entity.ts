import { relations } from 'drizzle-orm';
import { pgTable, serial, pgEnum, timestamp, integer } from 'drizzle-orm/pg-core';
import books from './book.entity';
import users from './user.entity';

export const statusEnum = pgEnum('status', ['success', 'canceled', 'pending']);

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
export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  bookId: integer("book_id").notNull().references(() => books.id),
  status: statusEnum('status'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const ordersRelations = relations(orders, ({ one }) => ({
  book: one(books, {
    fields: [orders.bookId],
    references: [books.id]
  }),
  user: one(users, {
    fields: [orders.userId],
    references: [users.id]
  })
}));

export default orders;