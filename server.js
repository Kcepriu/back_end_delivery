"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const configPath = path_1.default.join(__dirname, ".", "config", ".env");
dotenv_1.default.config({ path: configPath });
// require("dotenv").config({ path: configPath });
const connectDB_1 = __importDefault(require("./config/connectDB"));
const app_1 = __importDefault(require("./app"));
const { PORT = 3000 } = process.env;
(0, connectDB_1.default)();
app_1.default.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
});
//# sourceMappingURL=server.js.map