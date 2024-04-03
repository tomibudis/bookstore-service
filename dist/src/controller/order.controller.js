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
exports.OrderController = void 0;
const order_service_1 = require("../service/order.service");
class OrderController {
    constructor() {
        this.orderService = new order_service_1.OrderService();
    }
    createOrderController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield this.orderService.createOrder(req.body);
            res.status(201).json(order);
        });
    }
    listOrderController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield this.orderService.getAllOrders(req.params);
            res.status(200).json(orders);
        });
    }
    cancelOrderController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderService.cancelOrder(req.body.id, req.body.bookId, req.body.userId);
            res.status(200).json({
                messages: 'Cancel order successfully',
            });
        });
    }
    approveOrderController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderService.approveOrder(req.body.id, req.body.bookId, req.body.userId);
            res.status(200).json({
                messages: 'Approve order successfully',
            });
        });
    }
}
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map