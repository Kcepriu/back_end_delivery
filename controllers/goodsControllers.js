"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const goodsServices_1 = __importDefault(require("services/goodsServices"));
class GoodsController {
    constructor() {
        this.getAll = (0, express_async_handler_1.default)(async (req, res) => {
            const goods = await goodsServices_1.default.show({ ...req.body });
            res.status(200).json({ code: 200, data: goods, qty: goods.length });
        });
        this.add = (0, express_async_handler_1.default)(async (req, res) => {
            const good = await goodsServices_1.default.add({ ...req.body });
            res.status(201).json({ code: 201, data: good });
        });
        this.remove = (0, express_async_handler_1.default)(async (req, res) => {
            const { goodId: id } = req.params;
            const good = await goodsServices_1.default.remove(id);
            res.status(200).json({ code: 200, data: good });
        });
    }
}
const goodsController = new GoodsController();
exports.default = goodsController;
//# sourceMappingURL=goodsControllers.js.map