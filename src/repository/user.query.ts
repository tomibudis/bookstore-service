import { eq } from "drizzle-orm";
import { db } from "../config/database"
import userEntity from "../entity/user.entity";

type Payload = typeof userEntity.$inferInsert;

export class UserRepository {
  async findAll({ limit, offset }: { limit: number, offset: number }) {
    return db.query.users.findMany({
      limit,
      offset,
    })
  }

  async findAllByUsernameAndPassword({ username, password }: { username: string, password: string }) {
    return db.query.users.findMany({
      where: (eq(userEntity.username, username), eq(userEntity.password, password))
    });
  }

  async findById(id: number) {
    return db.query.users.findFirst({ where: eq(userEntity.id, id) });
  }

  async insertUser(data: Payload) {
    return db.insert(userEntity).values(data).returning();
  }

  async update(data: Payload, id: number) {
    return db.update(userEntity).set(data).where(eq(userEntity.id, id)).returning({ id: userEntity.id });
  }
}
