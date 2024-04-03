"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOOKS = exports.createRandomBook = void 0;
const book_entity_1 = __importDefault(require("../entity/book.entity"));
const faker_1 = require("@faker-js/faker");
const database_1 = require("./database");
function createRandomBook() {
    return {
        coverImage: faker_1.faker.image.imageUrl(),
        title: faker_1.faker.lorem.words(),
        point: faker_1.faker.number.int({ min: 0, max: 100 }),
        tag: [faker_1.faker.lorem.word(), faker_1.faker.lorem.word(), faker_1.faker.lorem.word()],
        writer: faker_1.faker.name.firstName() + ' ' + faker_1.faker.name.lastName()
    };
}
exports.createRandomBook = createRandomBook;
exports.BOOKS = faker_1.faker.helpers.multiple(createRandomBook, {
    count: 100,
});
const main = async () => {
    console.log("Seed start");
    await database_1.db.insert(book_entity_1.default).values(exports.BOOKS);
    console.log("Seed done");
};
main();
//# sourceMappingURL=seed.js.map