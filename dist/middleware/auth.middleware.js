"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authStrict = void 0;
const errorCodes_1 = require("@constants/errorCodes");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
function authStrict(req, res, next) {
    var _a, _b, _c;
    try {
        if (req.method === 'OPTIONS') {
            return next();
        }
        const { cookie } = req.headers;
        const token = (_c = (_b = (_a = cookie === null || cookie === void 0 ? void 0 : cookie.split('; ')) === null || _a === void 0 ? void 0 : _a.find((i) => i.includes('token'))) === null || _b === void 0 ? void 0 : _b.split('=')) === null || _c === void 0 ? void 0 : _c[1];
        if (!token) {
            throw new Error();
        }
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (e) {
        res.status(errorCodes_1.ErrorCodes.NOT_AUTH).json({ message: 'not auth' });
    }
}
exports.authStrict = authStrict;
//# sourceMappingURL=auth.middleware.js.map