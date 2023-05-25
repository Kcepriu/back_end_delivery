"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express, { Request, Response, NextFunction } from "express";
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const shopsRoutes_1 = __importDefault(require("./routes/shopsRoutes"));
const goodsRoutes_1 = __importDefault(require("./routes/goodsRoutes"));
const ordersRoutes_1 = __importDefault(require("./routes/ordersRoutes"));
const app = (0, express_1.default)();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use((0, morgan_1.default)(formatsLogger));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/shops", shopsRoutes_1.default);
app.use("/api/goods", goodsRoutes_1.default);
app.use("/api/orders", ordersRoutes_1.default);
// * Not Found
app.use("*", (_, res) => {
    // (req: Request, res: Response)
    res.status(404).json({ code: 404, message: "Not found" });
});
// * Server Error
app.use((err, _req, res, _next) => {
    console.log("Server error");
    //(err: any, req: Request, res: Response, next: NextFunction)
    const { status = 500, message = "Server Error" } = err;
    res.status(status).json({ code: status, message });
});
exports.default = app;
//# sourceMappingURL=app.js.map