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
require("module-alias/register");
const http_1 = require("http");
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const socket_io_1 = require("socket.io");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = 5000;
const mongoUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/conspects';
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
const server = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: '*',
    },
    serveClient: false,
});
// io.use(socketAuthStrict)
io.on('connection', (socket) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('socket: ', socket.id);
    // await onConnection(io, socket as AppSocket)
}));
const routers = (0, routes_1.default)();
app.get('/', (_req, res) => {
    res.json({ message: 'welcome to my app' });
});
app.use('/api/v1', routers.authRouter);
app.use('/api/v1/users', routers.userRouter);
app.use('/api/v1/articles', routers.catalogRouter);
app.use((_req, res) => {
    res.status(404).json({ message: 'Rout not found' });
});
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(mongoUrl);
            server.listen(PORT, () => {
                console.log(`Server started on port ${PORT}`);
            });
        }
        catch (e) {
            console.log(e);
        }
    });
}
start();
//# sourceMappingURL=app.js.map