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
const requestError_1 = __importDefault(require("../helpers/requestError"));
const google_maps_services_js_1 = require("@googlemaps/google-maps-services-js");
class MapsServices {
    constructor() {
        this.client = new google_maps_services_js_1.Client({});
        // * show ALL
        this.found_by_location = (params) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const lat = params.lat;
            const lng = params.lng;
            if (!lat || !lng) {
                throw (0, requestError_1.default)(400, "Not get params lat or lng ");
            }
            const result = yield this.client.geocode({
                params: {
                    // locations: [{ lat, lng }],
                    address: `${lat},${lng}`,
                    key: process.env.MAP_KEY,
                },
                timeout: 1000, // milliseconds
            });
            console.log("result", (_a = result.data) === null || _a === void 0 ? void 0 : _a.results[0]);
            const adress = (_b = result.data) === null || _b === void 0 ? void 0 : _b.results[0];
            if (!adress) {
                throw (0, requestError_1.default)(400, "Unable to fetch Goods");
            }
            return adress;
        });
        this.found_by_adress = (params) => __awaiter(this, void 0, void 0, function* () {
            var _c, _d;
            const address = params.address;
            if (!address) {
                throw (0, requestError_1.default)(400, "Not get params address");
            }
            const result = yield this.client.geocode({
                params: {
                    address,
                    key: process.env.MAP_KEY,
                },
                timeout: 1000, // milliseconds
            });
            console.log("result", (_c = result.data) === null || _c === void 0 ? void 0 : _c.results[0]);
            const location = (_d = result.data) === null || _d === void 0 ? void 0 : _d.results[0].geometry.location;
            if (!location) {
                throw (0, requestError_1.default)(400, "Unable to fetch Goods");
            }
            return location;
        });
    }
}
const mapsServices = new MapsServices();
exports.default = mapsServices;
//# sourceMappingURL=mapServices.js.map