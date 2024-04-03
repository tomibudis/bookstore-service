import { eq } from "drizzle-orm";
import { db } from "../config/database"
import bookEntity from "../entity/book.entity";

type Payload = typeof bookEntity.$inferInsert;

export class BookRepository {
  async findAll({ limit, offset, keyword }: { limit: number, offset: number, keyword?: string }) {
    return db.query.books.findMany({
      limit,
      offset,
      where: (book, { ilike }) => ilike(book.title, `%${keyword}%`),
    })
  }

  async findById(id: number) {
    return db.query.books.findFirst({ where: eq(bookEntity.id, id) });
  }

  
  async insertBook(data: Payload) {
    return db.insert(bookEntity).values(data).returning();
  }

  async multipleInsertBook(data: Payload[]) {
    return db.insert(bookEntity).values(data).returning();
  }
}
