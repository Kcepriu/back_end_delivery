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
const requestError_1 = __importDefault(require("backend/helpers/requestError"));
const shopsModel_1 = require("backend/models/shopsModel");
const mongoose_1 = require("mongoose");
class ShopsServices {
    constructor() {
        // * show ALL
        this.show = () => __awaiter(this, void 0, void 0, function* () {
            const shops = yield shopsModel_1.modelShops.find({});
            if (!shops) {
                throw (0, requestError_1.default)(400, "Unable to fetch shops");
            }
            return shops;
        });
        // * showOne
        this.showOne = (id) => __awaiter(this, void 0, void 0, function* () {
            if (!(0, mongoose_1.isValidObjectId)(id)) {
                throw (0, requestError_1.default)(400, "Not valid ID");
            }
            const shop = yield shopsModel_1.modelShops.findById(id);
            if (!shop) {
                throw (0, requestError_1.default)(400, "Unable to find Shop");
            }
            return shop;
        });
        // * add
        this.add = (data) => __awaiter(this, void 0, void 0, function* () {
            // const shop: IShop | null = (await modelShops.create(
            //   data
            // )) as Promise<IShop | null>;
            const shop = yield shopsModel_1.modelShops.create(data);
            if (!shop) {
                throw (0, requestError_1.default)(400, "Unable to save in DataBase");
            }
            return shop;
        });
        // * remove
        this.remove = (id) => __awaiter(this, void 0, void 0, function* () {
            if (!(0, mongoose_1.isValidObjectId)(id)) {
                throw (0, requestError_1.default)(400, "Not valid ID");
            }
            const shop = yield shopsModel_1.modelShops.findByIdAndDelete(id);
            if (!shop) {
                throw (0, requestError_1.default)(400, "Unable to find movie");
            }
            return shop;
        });
    }
}
const shopsServices = new ShopsServices();
exports.default = shopsServices;
//# sourceMappingURL=shopsServices.js.map