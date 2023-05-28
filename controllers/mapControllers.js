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
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const mapServices_1 = __importDefault(require("../services/mapServices"));
class MapController {
    constructor() {
        this.found_by_location = (0, express_async_handler_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const adress = yield mapServices_1.default.found_by_location(Object.assign({}, req.query));
            res.status(200).json({ code: 200, data: adress });
        }));
        this.found_by_adress = (0, express_async_handler_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const location = yield mapServices_1.default.found_by_adress(Object.assign({}, req.query));
            res.status(200).json({ code: 200, data: location });
        }));
    }
}
const mapController = new MapController();
exports.default = mapController;
//# sourceMappingURL=mapControllers.js.map