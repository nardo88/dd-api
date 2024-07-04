"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketAuthStrict = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET;
const socketAuthStrict = (socket, next) => {
    try {
        const token = socket.handshake.headers.authorization;
        if (!token) {
            socket.disconnect();
        }
        else {
            const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
            // @ts-ignore
            socket.userId = decoded.userId;
            next();
        }
    }
    catch (e) {
        socket.disconnect();
    }
};
exports.socketAuthStrict = socketAuthStrict;
//# sourceMappingURL=socket.middleware.js.map