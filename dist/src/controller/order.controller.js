"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_service_1 = require("../service/order.service");
class OrderController {
    orderService = new order_service_1.OrderService();
    async createOrderController(req, res) {
        const order = await this.orderService.createOrder(req.body);
        res.status(201).json(order);
    }
    async listOrderController(req, res) {
        const orders = await this.orderService.getAllOrders(req.params);
        res.status(200).json(orders);
    }
    async cancelOrderController(req, res) {
        await this.orderService.cancelOrder(req.body.id, req.body.bookId, req.body.userId);
        res.status(200).json({
            messages: 'Cancel order successfully',
        });
    }
    async approveOrderController(req, res) {
        await this.orderService.approveOrder(req.body.id, req.body.bookId, req.body.userId);
        res.status(200).json({
            messages: 'Approve order successfully',
        });
    }
}
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map