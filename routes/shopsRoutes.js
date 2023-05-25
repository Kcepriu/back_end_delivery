"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shopsControllers_1 = __importDefault(require("controllers/shopsControllers"));
const validateBody_1 = __importDefault(require("middlewapres/validateBody"));
const shopsModel_1 = require("models/shopsModel");
const routerShops = express_1.default.Router();
routerShops.get("/", shopsControllers_1.default.getAll);
routerShops.get("/:shopId", shopsControllers_1.default.getOne);
routerShops.post("/", (0, validateBody_1.default)(shopsModel_1.shemas.schemaAddShop), shopsControllers_1.default.add);
routerShops.delete("/:shopId", shopsControllers_1.default.remove);
exports.default = routerShops;
//# sourceMappingURL=shopsRoutes.js.map