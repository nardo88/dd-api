"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onConnection = void 0;
const onConnection = (io, socket) => {
    const { userId } = socket;
    socket.join(userId);
};
exports.onConnection = onConnection;
//# sourceMappingURL=onConnection.js.map