"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth");
var RouterEnum;
(function (RouterEnum) {
    RouterEnum["AUTH_ROUTERS"] = "authRouter";
})(RouterEnum || (RouterEnum = {}));
const createRoutes = () => {
    const authRouter = (0, auth_1.createAuthRouter)();
    return {
        authRouter,
    };
};
exports.default = createRoutes;
//# sourceMappingURL=index.js.map