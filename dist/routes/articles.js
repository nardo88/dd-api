"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createArticleRouter = void 0;
const express_1 = require("express");
const articles_1 = require("../controllers/articles");
const createArticleRouter = () => {
    const router = (0, express_1.Router)();
    const controller = new articles_1.ArticleController();
    router.get('/', controller.getList);
    router.get('/catalog', controller.getCatalog);
    return router;
};
exports.createArticleRouter = createArticleRouter;
//# sourceMappingURL=articles.js.map