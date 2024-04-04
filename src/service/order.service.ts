import orderEntity from "../entity/order.entity";
import { BookRepository } from "../repository/book.query";
import { OrderRepository } from "../repository/order.query";
import { UserRepository } from "../repository/user.query";

type Payload = typeof orderEntity.$inferInsert;

interface OrderParams {
  page: number;
  limit: number;
  userId: number;
}
export class OrderService {
  private orderRepository = new OrderRepository();
  private userRepository = new UserRepository();
  private bookRepository = new BookRepository();

  async getAllOrders (params: OrderParams) {
    return this.orderRepository.findAll({
      limit: params.limit,
      offset: params.limit * (params.page - 1),
      userId: params.userId,
    });
  }

  async createOrder (data: Payload) {
    const user = await this.userRepository.findById(data.userId);
    const book = await this.bookRepository.findById(data.bookId);

    return this.orderRepository.insertOrder({ ...data, status: 'pending' }).then((orders) => {
      // REQUIREMENT: when book success to order the user point will decrease according book point.
      this.userRepository.update({ point: user.point - book.point }, data.userId);
      // returning data order once insert data is successfully.
      return orders.at(0);
    });
  }

  async cancelOrder (id: number, bookId: number, userId: number) {
    const user = await this.userRepository.findById(userId);
    const book = await this.bookRepository.findById(bookId);
    
    return this.orderRepository.updateOrder({ status: 'canceled', bookId, userId }, id).then((orders) => {
      // NOTE: return back the point when the user cancel the order
      this.userRepository.update({ point: user.point + book.point }, userId);
      return orders.at(0);
    });
  }

  async approveOrder (id: number, bookId: number, userId: number) {
    return this.orderRepository.updateOrder({ status: 'success', bookId, userId}, id);
  }
}