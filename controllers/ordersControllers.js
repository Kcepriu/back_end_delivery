"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const ordersServices_1 = __importDefault(require("services/ordersServices"));
class OrdersController {
    constructor() {
        this.getAll = (0, express_async_handler_1.default)(async (_req, res) => {
            const orders = await ordersServices_1.default.show();
            res.status(200).json({ code: 200, data: orders, qty: orders.length });
        });
        this.getOne = (0, express_async_handler_1.default)(async (req, res) => {
            const { orderId: id } = req.params;
            const order = await ordersServices_1.default.showOne(id);
            res.status(200).json({ code: 200, data: order });
        });
        this.add = (0, express_async_handler_1.default)(async (req, res) => {
            const order = await ordersServices_1.default.add({ ...req.body });
            res.status(201).json({ code: 201, data: order });
        });
        this.remove = (0, express_async_handler_1.default)(async (req, res) => {
            const { orderId: id } = req.params;
            const order = await ordersServices_1.default.remove(id);
            res.status(200).json({ code: 200, data: order });
        });
    }
}
const ordersController = new OrdersController();
exports.default = ordersController;
//# sourceMappingURL=ordersControllers.js.map