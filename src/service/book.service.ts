import bookEntity from "../entity/book.entity";
import { BookRepository } from "../repository/book.query";

type Payload = typeof bookEntity.$inferInsert;

interface BookParams {
  limit: number;
  page: number;
  keyword?: string;
}
export class BookService {
  private bookRepository = new BookRepository();

  async getAllBooks (params: BookParams) {
    return this.bookRepository.findAll({
      limit: params.limit,
      keyword: params.keyword,
      offset: params.limit * (params.page - 1),
    });
  }

  async getDetailBook (id: number) {
    return this.bookRepository.findById(id);
  }

  async createBook (data: Payload) {
    return this.bookRepository.insertBook(data);
  }

}