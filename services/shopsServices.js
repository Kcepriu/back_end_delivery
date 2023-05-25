"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const requestError_1 = __importDefault(require("helpers/requestError"));
const shopsModel_1 = require("models/shopsModel");
const mongoose_1 = require("mongoose");
class ShopsServices {
    constructor() {
        // * show ALL
        this.show = async () => {
            const shops = await shopsModel_1.modelShops.find({});
            if (!shops) {
                throw (0, requestError_1.default)(400, "Unable to fetch shops");
            }
            return shops;
        };
        // * showOne
        this.showOne = async (id) => {
            if (!(0, mongoose_1.isValidObjectId)(id)) {
                throw (0, requestError_1.default)(400, "Not valid ID");
            }
            const shop = await shopsModel_1.modelShops.findById(id);
            if (!shop) {
                throw (0, requestError_1.default)(400, "Unable to find Shop");
            }
            return shop;
        };
        // * add
        this.add = async (data) => {
            // const shop: IShop | null = (await modelShops.create(
            //   data
            // )) as Promise<IShop | null>;
            const shop = await shopsModel_1.modelShops.create(data);
            if (!shop) {
                throw (0, requestError_1.default)(400, "Unable to save in DataBase");
            }
            return shop;
        };
        // * remove
        this.remove = async (id) => {
            if (!(0, mongoose_1.isValidObjectId)(id)) {
                throw (0, requestError_1.default)(400, "Not valid ID");
            }
            const shop = await shopsModel_1.modelShops.findByIdAndDelete(id);
            if (!shop) {
                throw (0, requestError_1.default)(400, "Unable to find movie");
            }
            return shop;
        };
    }
}
const shopsServices = new ShopsServices();
exports.default = shopsServices;
//# sourceMappingURL=shopsServices.js.map