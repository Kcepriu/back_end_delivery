"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateBody_1 = __importDefault(require("backend/middlewapres/validateBody"));
const goodsControllers_1 = __importDefault(require("backend/controllers/goodsControllers"));
const goodsModel_1 = require("backend/models/goodsModel");
const routerGoods = express_1.default.Router();
routerGoods.get("/", goodsControllers_1.default.getAll);
routerGoods.post("/", (0, validateBody_1.default)(goodsModel_1.shemas.schemaAddGood), goodsControllers_1.default.add);
routerGoods.delete("/:goodId", goodsControllers_1.default.remove);
exports.default = routerGoods;
//# sourceMappingURL=goodsRoutes.js.map