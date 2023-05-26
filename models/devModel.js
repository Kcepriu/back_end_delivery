"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shemas = void 0;
const joi_1 = __importDefault(require("joi"));
const schemaCreate = joi_1.default.object({
    isCreate: joi_1.default.boolean().required(),
});
const schemaDelete = joi_1.default.object({
    isDelete: joi_1.default.boolean().required(),
});
exports.shemas = {
    schemaCreate,
    schemaDelete,
};
//# sourceMappingURL=devModel.js.map