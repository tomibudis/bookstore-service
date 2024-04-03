import books from "../entity/book.entity";
import { faker } from "@faker-js/faker";
import { db } from "./database";

type Book = typeof books.$inferInsert;

export function createRandomBook(): Book  {
  return {
    coverImage: faker.image.imageUrl(),
    title: faker.lorem.words(),
    point: faker.number.int({ min: 0, max: 100 }),
    tag: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    writer: faker.name.firstName() + ' ' + faker.name.lastName()
  };
}

export const BOOKS: Book[] = faker.helpers.multiple(createRandomBook, {
  count: 100,
});
const main = async () => {
  console.log("Seed start");
  await db.insert(books).values(BOOKS);
  console.log("Seed done");
};

main();