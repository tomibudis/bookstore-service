import { eq } from "drizzle-orm";
import { db } from "../config/database"
import orderEntity from "../entity/order.entity";

type Payload = typeof orderEntity.$inferInsert;

export class OrderRepository {
  async findAll({ limit, offset }: { limit: number, offset: number }) {
    return db.query.orders.findMany({
      limit,
      offset,
    })
  }

  async findById(id: number) {
    return db.query.orders.findFirst({ where: eq(orderEntity.id, id) });
  }
  
  async insertOrder(data: Payload) {
    return db.insert(orderEntity).values(data).returning();
  }

  async updateOrder(data: Payload, id: number) {
    return db.update(orderEntity).set(data).where(eq(orderEntity.id, id)).returning({ id: orderEntity.id });
  }
}
