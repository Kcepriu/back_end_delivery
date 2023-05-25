"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const requestError_1 = __importDefault(require("../helpers/requestError"));
const goodsModel_1 = require("../models/goodsModel");
const shopsModel_1 = require("../models/shopsModel");
class GoodsServices {
    constructor() {
        // * show ALL
        this.show = (data) => __awaiter(this, void 0, void 0, function* () {
            const { shop } = data;
            let goods;
            if (shop) {
                goods = yield goodsModel_1.modelGoods.find({ shop });
            }
            else {
                goods = yield goodsModel_1.modelGoods.find({});
            }
            if (!goods) {
                throw (0, requestError_1.default)(400, "Unable to fetch Goods");
            }
            return goods;
        });
        // * showOne
        this.showOne = (id) => __awaiter(this, void 0, void 0, function* () {
            if (!(0, mongoose_1.isValidObjectId)(id)) {
                throw (0, requestError_1.default)(400, "Not valid ID");
            }
            const good = yield goodsModel_1.modelGoods.findById(id);
            if (!good) {
                throw (0, requestError_1.default)(400, "Unable to find Good");
            }
            return good;
        });
        // * Add
        this.add = (data) => __awaiter(this, void 0, void 0, function* () {
            const { shop: shopId } = data;
            if (!(0, mongoose_1.isValidObjectId)(shopId)) {
                throw (0, requestError_1.default)(400, "Not valid Shop ID");
            }
            const shop = yield shopsModel_1.modelShops.findById(shopId);
            if (!shop) {
                throw (0, requestError_1.default)(400, "Unable to find Goods");
            }
            const good = yield goodsModel_1.modelGoods.create(data);
            if (!good) {
                throw (0, requestError_1.default)(400, "Unable to save in DataBase");
            }
            return good;
        });
        // * Remove
        this.remove = (id) => __awaiter(this, void 0, void 0, function* () {
            if (!(0, mongoose_1.isValidObjectId)(id)) {
                throw (0, requestError_1.default)(400, "Not valid ID");
            }
            const good = yield goodsModel_1.modelGoods.findByIdAndDelete(id);
            if (!good) {
                throw (0, requestError_1.default)(400, "Unable to find movie");
            }
            return good;
        });
    }
}
const goodsServices = new GoodsServices();
exports.default = goodsServices;
//# sourceMappingURL=goodsServices.js.map