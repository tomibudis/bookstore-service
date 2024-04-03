"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const book_query_1 = require("../repository/book.query");
const order_query_1 = require("../repository/order.query");
const user_query_1 = require("../repository/user.query");
class OrderService {
    orderRepository = new order_query_1.OrderRepository();
    userRepository = new user_query_1.UserRepository();
    bookRepository = new book_query_1.BookRepository();
    async getAllOrders(params) {
        return this.orderRepository.findAll({
            limit: params.limit,
            offset: params.limit * (params.page - 1),
        });
    }
    async createOrder(data) {
        const user = await this.userRepository.findById(data.userId);
        const book = await this.bookRepository.findById(data.bookId);
        return this.orderRepository.insertOrder({ ...data, status: 'pending' }).then((orders) => {
            // REQUIREMENT: when book success to order the user point will decrease according book point.
            this.userRepository.update({ point: user.point - book.point }, data.userId);
            // returning data order once insert data is successfully.
            return orders.at(0);
        });
    }
    async cancelOrder(id, bookId, userId) {
        return this.orderRepository.updateOrder({ status: 'canceled', bookId, userId }, id);
    }
    async approveOrder(id, bookId, userId) {
        return this.orderRepository.updateOrder({ status: 'success', bookId, userId }, id);
    }
}
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map