"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const database_1 = require("../config/database");
const order_entity_1 = __importDefault(require("../entity/order.entity"));
class OrderRepository {
    async findAll({ limit, offset }) {
        return database_1.db.query.orders.findMany({
            limit,
            offset,
        });
    }
    async findById(id) {
        return database_1.db.query.orders.findFirst({ where: (0, drizzle_orm_1.eq)(order_entity_1.default.id, id) });
    }
    async insertOrder(data) {
        return database_1.db.insert(order_entity_1.default).values(data).returning();
    }
    async updateOrder(data, id) {
        return database_1.db.update(order_entity_1.default).set(data).where((0, drizzle_orm_1.eq)(order_entity_1.default.id, id)).returning({ id: order_entity_1.default.id });
    }
}
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=order.query.js.map