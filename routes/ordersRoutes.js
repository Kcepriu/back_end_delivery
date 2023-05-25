"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateBody_1 = __importDefault(require("middlewapres/validateBody"));
//
const ordersControllers_1 = __importDefault(require("controllers/ordersControllers"));
const orderModel_1 = require("models/orderModel");
const routerOrder = express_1.default.Router();
routerOrder.get("/", ordersControllers_1.default.getAll);
routerOrder.get("/:orderId", ordersControllers_1.default.getOne);
routerOrder.post("/", (0, validateBody_1.default)(orderModel_1.shemas.schemaAddOrder), ordersControllers_1.default.add);
routerOrder.delete("/:orderId", ordersControllers_1.default.remove);
exports.default = routerOrder;
//# sourceMappingURL=ordersRoutes.js.map