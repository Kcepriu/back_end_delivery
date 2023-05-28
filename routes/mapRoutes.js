"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mapControllers_1 = __importDefault(require("../controllers/mapControllers"));
const mapRoutes = express_1.default.Router();
mapRoutes.get("/by_location", mapControllers_1.default.found_by_location);
mapRoutes.get("/by_adress", mapControllers_1.default.found_by_adress);
exports.default = mapRoutes;
//# sourceMappingURL=mapRoutes.js.map