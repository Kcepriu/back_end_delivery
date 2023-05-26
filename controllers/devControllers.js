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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const requestError_1 = __importDefault(require("../helpers/requestError"));
const goodsServices_1 = __importDefault(require("../services/goodsServices"));
const shopsServices_1 = __importDefault(require("../services/shopsServices"));
const devServices_1 = __importDefault(require("../services/devServices"));
class DevController {
    constructor() {
        this.initialDataPath = path_1.default.join(__dirname, "..", "testDB", "testData.json");
        this.createTestData = () => __awaiter(this, void 0, void 0, function* () {
            const initialData = yield this.readTestData();
            for (const shopWithGoods of initialData) {
                // Create shop
                const shopId = yield this.createShops(shopWithGoods);
                const { goods } = shopWithGoods;
                for (const article of goods) {
                    yield this.createGoods(shopId, article);
                }
            }
        });
        this.readTestData = () => __awaiter(this, void 0, void 0, function* () {
            console.log("initialDataPath", this.initialDataPath);
            const data = yield promises_1.default.readFile(this.initialDataPath, "utf8");
            return JSON.parse(data);
        });
        this.createShops = (data) => __awaiter(this, void 0, void 0, function* () {
            const { goods } = data, shop = __rest(data, ["goods"]);
            const newShop = yield shopsServices_1.default.add(shop);
            return String(newShop._id);
        });
        this.createGoods = (shop, goods) => __awaiter(this, void 0, void 0, function* () {
            yield goodsServices_1.default.add(Object.assign({ shop }, goods));
        });
        this.create_all_data = (0, express_async_handler_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { isCreate } = req.body;
            if (!isCreate) {
                throw (0, requestError_1.default)(400, 'Missing parameter "isCreate"');
            }
            yield this.createTestData();
            res.status(201).json({ code: 201, message: "Test data created" });
        }));
        this.delete_all_data = (0, express_async_handler_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { isDelete } = req.body;
            if (!isDelete) {
                throw (0, requestError_1.default)(400, 'Missing parameter "isDelete"');
            }
            const count_orders = yield devServices_1.default.removeAllOrders();
            const count_goods = yield devServices_1.default.removeAllGoods();
            const count_shops = yield devServices_1.default.removeAllShops();
            res.status(200).json({ code: 200, count_orders, count_goods, count_shops });
        }));
    }
}
const devController = new DevController();
exports.default = devController;
//# sourceMappingURL=devControllers.js.map