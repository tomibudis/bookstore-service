import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - fullName
 *        - username
 *        - password
 *      properties:
 *        fullName:
 *          type: string
 *          default: tomi budi
 *        username:
 *          type: string
 *          default: tomibudis
 *        password:
 *          type: string
 *          default: stringPassword123
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        fullName:
 *          type: string
 *        username:
 *          type: string
 *        created_at:
 *          type: string
 *        point:
 *          type: number
 */
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  username: text('username'),
  password: text('password'),
  point: integer('point'),
  createdAt: timestamp('created_at').defaultNow(),
});

export default users;