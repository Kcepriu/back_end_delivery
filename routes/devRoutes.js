"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateBody_1 = __importDefault(require("../middlewapres/validateBody"));
const devControllers_1 = __importDefault(require("../controllers/devControllers"));
const devModel_1 = require("../models/devModel");
const devRoutes = express_1.default.Router();
devRoutes.post("/create_all_data", (0, validateBody_1.default)(devModel_1.shemas.schemaCreate), devControllers_1.default.create_all_data);
devRoutes.post("/delete_all_data", (0, validateBody_1.default)(devModel_1.shemas.schemaDelete), devControllers_1.default.delete_all_data);
exports.default = devRoutes;
//# sourceMappingURL=devRoutes.js.map