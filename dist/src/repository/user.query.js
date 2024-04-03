"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const database_1 = require("../config/database");
const user_entity_1 = __importDefault(require("../entity/user.entity"));
class UserRepository {
    async findAll({ limit, offset }) {
        return database_1.db.query.users.findMany({
            limit,
            offset,
        });
    }
    async findAllByUsernameAndPassword({ username, password }) {
        return database_1.db.query.users.findMany({
            where: ((0, drizzle_orm_1.eq)(user_entity_1.default.username, username), (0, drizzle_orm_1.eq)(user_entity_1.default.password, password))
        });
    }
    async findById(id) {
        return database_1.db.query.users.findFirst({ where: (0, drizzle_orm_1.eq)(user_entity_1.default.id, id) });
    }
    async insertUser(data) {
        return database_1.db.insert(user_entity_1.default).values(data).returning();
    }
    async update(data, id) {
        return database_1.db.update(user_entity_1.default).set(data).where((0, drizzle_orm_1.eq)(user_entity_1.default.id, id)).returning({ id: user_entity_1.default.id });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.query.js.map