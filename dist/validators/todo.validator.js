"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaTodoDelete = exports.schemaTodoPut = exports.schemaTodoPost = exports.schemaTodoGet = void 0;
const joi_1 = __importDefault(require("joi"));
// define esquema todo Get
exports.schemaTodoGet = joi_1.default.object().keys({
    id: joi_1.default.number().required()
});
// define esquema todo Post
exports.schemaTodoPost = joi_1.default.object().keys({
    id: joi_1.default.number().required(),
    userId: joi_1.default.number().required(),
    title: joi_1.default.string().required(),
    completed: joi_1.default.boolean()
});
// define esquema todo Put
exports.schemaTodoPut = joi_1.default.object().keys({
    id: joi_1.default.number().required(),
    userId: joi_1.default.number().required(),
    title: joi_1.default.string().required(),
    completed: joi_1.default.boolean()
});
// define esquema todo Delete
exports.schemaTodoDelete = joi_1.default.object().keys({
    id: joi_1.default.number().required()
});
//# sourceMappingURL=todo.validator.js.map