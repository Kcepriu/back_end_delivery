"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleMongooseError = (error, next) => {
    const { name, code } = error;
    error.status = name === "MongoServerError" && code === 11000 ? 409 : 400;
    next();
};
exports.default = handleMongooseError;
//# sourceMappingURL=handleMongooseError.js.map