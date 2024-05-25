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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const pagination_1 = require("../../helpers/pagination");
const getCatalog_1 = require("./modules/getCatalog");
class ArticleController {
    constructor() {
        this.getCatalog = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { page, pageCount } = (0, pagination_1.pagination)(req.query);
                const { data, total } = yield (0, getCatalog_1.getCatalog)({ page, pageCount });
                res.json({ data, total });
            }
            catch (e) {
                res
                    .status(500)
                    .json({ details: e.message, message: 'Что то пошло не так!' });
            }
        });
    }
}
exports.ArticleController = ArticleController;
//# sourceMappingURL=index.js.map