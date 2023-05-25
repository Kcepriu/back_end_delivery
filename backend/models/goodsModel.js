"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelGoods = exports.shemas = void 0;
const mongoose_1 = require("mongoose");
const handleMongooseError_1 = __importDefault(require("backend/helpers/handleMongooseError"));
const joi_1 = __importDefault(require("joi"));
const goodsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "DB: Name is required"],
    },
    urlPicture: {
        type: String,
        required: [true, "DB: Url fro Picture is required"],
    },
    price: {
        type: Number,
        required: [true, "DB: price is required"],
    },
    shop: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "shops",
        required: [true, "DB: shop is required"],
    },
}, { versionKey: false, timestamps: true });
goodsSchema.post("save", handleMongooseError_1.default);
// * Schema Add new shop Joi validation
const schemaAddGood = joi_1.default.object({
    name: joi_1.default.string().min(3).max(30).required(),
    urlPicture: joi_1.default.string().min(10).max(30).required(),
    price: joi_1.default.number().min(0.01).positive().required(),
    shop: joi_1.default.string().min(3).max(30).required(),
});
exports.shemas = {
    schemaAddGood,
};
exports.modelGoods = (0, mongoose_1.model)("goods", goodsSchema);
//# sourceMappingURL=goodsModel.js.map