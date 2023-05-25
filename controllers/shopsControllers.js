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
const shopsServices_1 = __importDefault(require("../services/shopsServices"));
class ShopsController {
    constructor() {
        this.getAll = (0, express_async_handler_1.default)((_req, res) => __awaiter(this, void 0, void 0, function* () {
            const shops = yield shopsServices_1.default.show();
            res.status(200).json({ code: 200, data: shops, qty: shops.length });
        }));
        this.getOne = (0, express_async_handler_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { shopId: id } = req.params;
            const shop = yield shopsServices_1.default.showOne(id);
            res.status(200).json({ code: 200, data: shop });
        }));
        this.add = (0, express_async_handler_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const shop = yield shopsServices_1.default.add(Object.assign({}, req.body));
            res.status(200).json({ code: 200, data: shop });
        }));
        this.remove = (0, express_async_handler_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { shopId: id } = req.params;
            const shop = yield shopsServices_1.default.remove(id);
            res.status(200).json({ code: 200, data: shop });
        }));
    }
}
const shopController = new ShopsController();
exports.default = shopController;
//# sourceMappingURL=shopsControllers.js.map