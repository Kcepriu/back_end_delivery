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
const orderModel_1 = require("backend/models/orderModel");
const mongoose_1 = require("mongoose");
class OrdersServices {
    constructor() {
        // * show ALL
        this.show = () => __awaiter(this, void 0, void 0, function* () {
            const orders = yield orderModel_1.modelOrder.find({});
            if (!orders) {
                throw (0, requestError_1.default)(400, "Unable to fetch Orders");
            }
            return orders;
        });
        // * showOne
        this.showOne = (id) => __awaiter(this, void 0, void 0, function* () {
            if (!(0, mongoose_1.isValidObjectId)(id)) {
                throw (0, requestError_1.default)(400, "Not valid ID");
            }
            const order = yield orderModel_1.modelOrder.findById(id);
            if (!order) {
                throw (0, requestError_1.default)(400, "Unable to find Order");
            }
            return order;
        });
        // * Add
        this.add = (data) => __awaiter(this, void 0, void 0, function* () {
            const order = yield orderModel_1.modelOrder.create(data);
            if (!order) {
                throw (0, requestError_1.default)(400, "Unable to save in DataBase");
            }
            return order;
        });
        // * Remove
        this.remove = (id) => __awaiter(this, void 0, void 0, function* () {
            if (!(0, mongoose_1.isValidObjectId)(id)) {
                throw (0, requestError_1.default)(400, "Not valid ID");
            }
            const order = yield orderModel_1.modelOrder.findByIdAndDelete(id);
            if (!order) {
                throw (0, requestError_1.default)(400, "Unable to find movie");
            }
            return order;
        });
    }
}
const ordersServices = new OrdersServices();
exports.default = ordersServices;
//# sourceMappingURL=ordersServices.js.map