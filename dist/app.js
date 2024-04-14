"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const PORT = 5000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send(`<h1>It's work</h1>`);
});
app.get('/test', (req, res) => {
    res.send(`<h1>It's work!!!!/h1>`);
});
app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
});
//# sourceMappingURL=app.js.map