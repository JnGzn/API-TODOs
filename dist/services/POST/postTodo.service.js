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
exports.PostTodo = void 0;
const axios_1 = __importDefault(require("axios"));
const todo_service_1 = require("../todo.service");
class PostTodo extends todo_service_1.ServiceTodo {
    /**
     * Guarda el todo enviado.
     * @param {todo} todo: todo a guardar
     * @returns todo guardado
     */
    postTodo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const todoEnvio = Object.assign({}, todo);
            console.log(todoEnvio);
            try {
                // peticion a jsonplaceholder
                const responseData = yield axios_1.default.post(`${this.enlaceBase}`, JSON.stringify(todoEnvio));
                // respuesta de la peticion
                if (!responseData) {
                    return {};
                }
                todoEnvio.id = responseData.data.id;
                return todoEnvio;
            }
            catch (error) {
                console.error(`Error en la petición: ${error}`);
                throw new Error('Error en el servidor');
            }
        });
    }
}
exports.PostTodo = PostTodo;
//# sourceMappingURL=postTodo.service.js.map