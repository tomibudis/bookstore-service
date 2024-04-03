"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Seed start");
    yield database_1.db.insert(book_entity_1.default).values(exports.BOOKS);
    console.log("Seed done");
});
main();
//# sourceMappingURL=seed.js.map