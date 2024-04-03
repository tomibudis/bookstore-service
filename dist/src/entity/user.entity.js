"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
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
exports.users = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    fullName: (0, pg_core_1.text)('full_name'),
    username: (0, pg_core_1.text)('username'),
    password: (0, pg_core_1.text)('password'),
    point: (0, pg_core_1.integer)('point'),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow(),
});
exports.default = exports.users;
//# sourceMappingURL=user.entity.js.map