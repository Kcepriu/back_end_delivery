"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const requestError_1 = __importDefault(require("helpers/requestError"));
const goodsModel_1 = require("models/goodsModel");
const shopsModel_1 = require("models/shopsModel");
const mongoose_1 = require("mongoose");
class GoodsServices {
    constructor() {
        // * show ALL
        this.show = async (data) => {
            const { shop } = data;
            let goods;
            if (shop) {
                goods = await goodsModel_1.modelGoods.find({ shop });
            }
            else {
                goods = await goodsModel_1.modelGoods.find({});
            }
            if (!goods) {
                throw (0, requestError_1.default)(400, "Unable to fetch Goods");
            }
            return goods;
        };
        // * showOne
        this.showOne = async (id) => {
            if (!(0, mongoose_1.isValidObjectId)(id)) {
                throw (0, requestError_1.default)(400, "Not valid ID");
            }
            const good = await goodsModel_1.modelGoods.findById(id);
            if (!good) {
                throw (0, requestError_1.default)(400, "Unable to find Good");
            }
            return good;
        };
        // * Add
        this.add = async (data) => {
            const { shop: shopId } = data;
            if (!(0, mongoose_1.isValidObjectId)(shopId)) {
                throw (0, requestError_1.default)(400, "Not valid Shop ID");
            }
            const shop = await shopsModel_1.modelShops.findById(shopId);
            if (!shop) {
                throw (0, requestError_1.default)(400, "Unable to find Goods");
            }
            const good = await goodsModel_1.modelGoods.create(data);
            if (!good) {
                throw (0, requestError_1.default)(400, "Unable to save in DataBase");
            }
            return good;
        };
        // * Remove
        this.remove = async (id) => {
            if (!(0, mongoose_1.isValidObjectId)(id)) {
                throw (0, requestError_1.default)(400, "Not valid ID");
            }
            const good = await goodsModel_1.modelGoods.findByIdAndDelete(id);
            if (!good) {
                throw (0, requestError_1.default)(400, "Unable to find movie");
            }
            return good;
        };
    }
}
const goodsServices = new GoodsServices();
exports.default = goodsServices;
//# sourceMappingURL=goodsServices.js.map