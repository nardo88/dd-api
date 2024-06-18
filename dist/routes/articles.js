"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createArticleRouter = void 0;
const express_1 = require("express");
const articles_1 = require("../controllers/articles");
const auth_middleware_1 = require("../middleware/auth.middleware");
const createArticleRouter = () => {
    const router = (0, express_1.Router)();
    const controller = new articles_1.ArticleController();
    router.get('/', auth_middleware_1.authStrict, controller.getList);
    router.get('/catalog', controller.getCatalog);
    router.get('/get-for-edit/:id', auth_middleware_1.authStrict, controller.getForEdit);
    return router;
};
exports.createArticleRouter = createArticleRouter;
//# sourceMappingURL=articles.js.map