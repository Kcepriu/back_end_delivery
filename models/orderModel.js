"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelOrder = exports.shemas = void 0;
const mongoose_1 = require("mongoose");
const handleMongooseError_1 = __importDefault(require("helpers/handleMongooseError"));
const joi_1 = __importDefault(require("joi"));
const phoneRegExp = /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const schemaGoodsDocument = new mongoose_1.Schema({
    goods: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "goods",
        required: [true, "DB: goods is required"],
    },
    count: { type: Number, default: 0 },
    sum: {
        type: Number,
        default: 0,
    },
});
const schemaOrders = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "DB: Name is required"],
    },
    shop: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "shops",
        required: [true, "DB: shop is required"],
    },
    phone: {
        type: String,
        match: phoneRegExp,
        required: [true, "DB: phone is required"],
    },
    email: {
        type: String,
        match: emailRegExp,
        required: [true, "DB: email is required"],
    },
    location: {
        type: String,
        required: [true, "DB: location is required"],
    },
    adress: {
        type: String,
        required: [true, "DB: adress is required"],
    },
    sum: {
        type: Number,
        default: 0,
    },
    goodsDocument: { type: [schemaGoodsDocument], required: true },
}, { versionKey: false, timestamps: true });
schemaOrders.post("save", handleMongooseError_1.default);
// * Schema Add new shop Joi validation
const schemaAddOrder = joi_1.default.object({
    name: joi_1.default.string().min(3).max(30).required(),
    shop: joi_1.default.string().min(3).max(30).required(),
    phone: joi_1.default.string().min(3).max(30).pattern(phoneRegExp).required(),
    email: joi_1.default.string().min(3).max(30).pattern(emailRegExp).required(),
    location: joi_1.default.string().min(3).max(30).required(),
    adress: joi_1.default.string().min(3).max(30).required(),
    sum: joi_1.default.number().min(0).positive().required(),
    goodsDocument: joi_1.default.array().items(joi_1.default.object({
        goods: joi_1.default.string().min(3).max(30).required(),
        count: joi_1.default.number().min(1).positive().required(),
        sum: joi_1.default.number().min(0).positive().required(),
    })),
});
exports.shemas = {
    schemaAddOrder,
};
exports.modelOrder = (0, mongoose_1.model)("orders", schemaOrders);
//# sourceMappingURL=orderModel.js.map