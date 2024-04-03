import type { Request, Response } from 'express';
import { BookService } from '../service/book.service';
import bookEntity from '../entity/book.entity';

type Book = typeof bookEntity.$inferInsert;
interface Payload {
  title: string;
  author: string;
  description: string;
  point: number;
}
interface Params {
  limit: number;
  page: number;
}

const bookService = new BookService();

export class BookController {
  async createBookController(req: Request<{},Payload>, res: Response<Book>) {
    const books = await bookService.createBook(req.body);

    res.status(201).json({ ...books.at(0) })
  }

  async listBookController(req: Request<Params>, res: Response<Book[]>) {
    const books = await bookService.getAllBooks(req.params);

    res.status(200).json(books);
  }

  async detailBookController(req: Request<{}, { id: number }>, res: Response) {
    const book = await bookService.getDetailBook(req.body.id);
    res.status(200).json(book);
  }
}