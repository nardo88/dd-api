"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const ContentSchema = new mongoose_1.Schema({
    _id: mongoose_1.Schema.Types.String,
    type: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    value: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
}, {
    versionKey: false,
});
const ArticlesSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    title: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    userId: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        ref: 'Users',
    },
    category: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    description: { type: mongoose_1.Schema.Types.String },
    image: { type: mongoose_1.Schema.Types.String },
    body: [ContentSchema],
    createdAt: mongoose_1.Schema.Types.Number,
    updatedAt: mongoose_1.Schema.Types.Number,
}, {
    timestamps: true,
    collection: 'articles',
    versionKey: false,
    autoCreate: true,
});
exports.default = mongoose_1.default.model('Articles', ArticlesSchema);
//# sourceMappingURL=Articles.js.map