"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelShops = exports.shemas = void 0;
const mongoose_1 = require("mongoose");
const goodsModel_1 = require("./goodsModel");
const handleMongooseError_1 = __importDefault(require("helpers/handleMongooseError"));
const joi_1 = __importDefault(require("joi"));
const schemaShops = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "DB: Name is required"],
    },
    location: {
        type: String,
        required: [true, "DB: location is required"],
    },
    adress: {
        type: String,
        required: [true, "DB: adress is required"],
    },
}, { versionKey: false, timestamps: true });
schemaShops.post("save", handleMongooseError_1.default);
// TODO Винести в модуль
schemaShops.pre(["deleteOne", "deleteMany", "findOneAndDelete"], async function (next) {
    const id = this.getQuery()._id;
    const productsCount = await goodsModel_1.modelGoods.countDocuments({ shop: id });
    if (productsCount > 0) {
        const error = new Error("The table Goods contains data that refers to this object");
        error.status = 400;
        next(error);
    }
    else {
        next();
    }
});
// * Schema Add new shop Joi validation
const schemaAddShop = joi_1.default.object({
    name: joi_1.default.string().min(3).max(30).required(),
    location: joi_1.default.string().min(3).max(30).required(),
    adress: joi_1.default.string().min(3).max(30).required(),
});
exports.shemas = {
    schemaAddShop,
};
exports.modelShops = (0, mongoose_1.model)("shops", schemaShops);
//# sourceMappingURL=shopsModel.js.map