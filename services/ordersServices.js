"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const requestError_1 = __importDefault(require("helpers/requestError"));
const orderModel_1 = require("models/orderModel");
const mongoose_1 = require("mongoose");
class OrdersServices {
    constructor() {
        // * show ALL
        this.show = async () => {
            const orders = await orderModel_1.modelOrder.find({});
            if (!orders) {
                throw (0, requestError_1.default)(400, "Unable to fetch Orders");
            }
            return orders;
        };
        // * showOne
        this.showOne = async (id) => {
            if (!(0, mongoose_1.isValidObjectId)(id)) {
                throw (0, requestError_1.default)(400, "Not valid ID");
            }
            const order = await orderModel_1.modelOrder.findById(id);
            if (!order) {
                throw (0, requestError_1.default)(400, "Unable to find Order");
            }
            return order;
        };
        // * Add
        this.add = async (data) => {
            const order = await orderModel_1.modelOrder.create(data);
            if (!order) {
                throw (0, requestError_1.default)(400, "Unable to save in DataBase");
            }
            return order;
        };
        // * Remove
        this.remove = async (id) => {
            if (!(0, mongoose_1.isValidObjectId)(id)) {
                throw (0, requestError_1.default)(400, "Not valid ID");
            }
            const order = await orderModel_1.modelOrder.findByIdAndDelete(id);
            if (!order) {
                throw (0, requestError_1.default)(400, "Unable to find movie");
            }
            return order;
        };
    }
}
const ordersServices = new OrdersServices();
exports.default = ordersServices;
//# sourceMappingURL=ordersServices.js.map