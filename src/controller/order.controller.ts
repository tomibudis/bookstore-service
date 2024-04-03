import type { Request, Response } from 'express';
import { OrderService } from '../service/order.service';
import orderEntity from '../entity/order.entity';

type Order = typeof orderEntity.$inferInsert;
interface Params {
  limit: number;
  page: number;
  keyword?: string;
}
interface Payload {
  id: number;
  bookId: number;
  userId: number;
}
export class OrderController {
  private orderService = new OrderService();
  
  async createOrderController (req: Request, res: Response<Order>) {
    const order = await this.orderService.createOrder(req.body);
    res.status(201).json(order);
  }

  async listOrderController (req: Request<Params>, res: Response<Order[]>) {
    const orders = await this.orderService.getAllOrders(req.params);
    res.status(200).json(orders);
  }

  async cancelOrderController (req: Request<{}, Payload>, res: Response) {
    await this.orderService.cancelOrder(req.body.id, req.body.bookId, req.body.userId);
    res.status(200).json({
      messages: 'Cancel order successfully',
    });
  }

  async approveOrderController (req: Request<{}, Payload>, res: Response) {
    await this.orderService.approveOrder(req.body.id, req.body.bookId, req.body.userId);

    res.status(200).json({
      messages: 'Approve order successfully',
    })
  }
}
