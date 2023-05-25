"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const shopsServices_1 = __importDefault(require("services/shopsServices"));
class ShopsController {
    constructor() {
        this.getAll = (0, express_async_handler_1.default)(async (_req, res) => {
            const shops = await shopsServices_1.default.show();
            res.status(200).json({ code: 200, data: shops, qty: shops.length });
        });
        this.getOne = (0, express_async_handler_1.default)(async (req, res) => {
            const { shopId: id } = req.params;
            const shop = await shopsServices_1.default.showOne(id);
            res.status(200).json({ code: 200, data: shop });
        });
        this.add = (0, express_async_handler_1.default)(async (req, res) => {
            const shop = await shopsServices_1.default.add({ ...req.body });
            res.status(200).json({ code: 200, data: shop });
        });
        this.remove = (0, express_async_handler_1.default)(async (req, res) => {
            const { shopId: id } = req.params;
            const shop = await shopsServices_1.default.remove(id);
            res.status(200).json({ code: 200, data: shop });
        });
    }
}
const shopController = new ShopsController();
exports.default = shopController;
//# sourceMappingURL=shopsControllers.js.map