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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const book_query_1 = require("../repository/book.query");
const order_query_1 = require("../repository/order.query");
const user_query_1 = require("../repository/user.query");
class OrderService {
    constructor() {
        this.orderRepository = new order_query_1.OrderRepository();
        this.userRepository = new user_query_1.UserRepository();
        this.bookRepository = new book_query_1.BookRepository();
    }
    getAllOrders(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orderRepository.findAll({
                limit: params.limit,
                offset: params.limit * (params.page - 1),
                userId: params.userId,
            });
        });
    }
    createOrder(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findById(data.userId);
            const book = yield this.bookRepository.findById(data.bookId);
            return this.orderRepository.insertOrder(Object.assign(Object.assign({}, data), { status: 'pending' })).then((orders) => {
                // REQUIREMENT: when book success to order the user point will decrease according book point.
                this.userRepository.update({ point: user.point - book.point }, data.userId);
                // returning data order once insert data is successfully.
                return orders.at(0);
            });
        });
    }
    cancelOrder(id, bookId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findById(userId);
            const book = yield this.bookRepository.findById(bookId);
            return this.orderRepository.updateOrder({ status: 'canceled', bookId, userId }, id).then((orders) => {
                // NOTE: return back the point when the user cancel the order
                this.userRepository.update({ point: user.point + book.point }, userId);
                return orders.at(0);
            });
        });
    }
    approveOrder(id, bookId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orderRepository.updateOrder({ status: 'success', bookId, userId }, id);
        });
    }
}
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map