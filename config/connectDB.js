"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { DB_HOST = "" } = process.env;
console.log("DB_HOST", DB_HOST);
const connectDB = async () => {
    try {
        const DB = await mongoose_1.default.connect(DB_HOST);
        console.log(`Mongo db is connected. Name: ${DB.connection.name}. Port: ${DB.connection.port}. Host: ${DB.connection.host}`);
    }
    catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};
exports.default = connectDB;
//# sourceMappingURL=connectDB.js.map