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
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const ordersServices_1 = __importDefault(require("../services/ordersServices"));
class OrdersController {
    constructor() {
        this.getAll = (0, express_async_handler_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const orders = yield ordersServices_1.default.show(Object.assign({}, req.query));
            res.status(200).json({ code: 200, data: orders, qty: orders.length });
        }));
        this.getOne = (0, express_async_handler_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { orderId: id } = req.params;
            const order = yield ordersServices_1.default.showOne(id);
            res.status(200).json({ code: 200, data: order });
        }));
        this.add = (0, express_async_handler_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const order = yield ordersServices_1.default.add(Object.assign({}, req.body));
            res.status(201).json({ code: 201, data: order });
        }));
        this.remove = (0, express_async_handler_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { orderId: id } = req.params;
            const order = yield ordersServices_1.default.remove(id);
            res.status(200).json({ code: 200, data: order });
        }));
    }
}
const ordersController = new OrdersController();
exports.default = ordersController;
//# sourceMappingURL=ordersControllers.js.map