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
exports.PutTodo = void 0;
const axios_1 = __importDefault(require("axios"));
const todo_service_1 = require("../todo.service");
class PutTodo extends todo_service_1.ServiceTodo {
    /**
     * Modifica el todo enviado, es importante tener el Id del todo
     * @param {todo} todo:  todo a modificar
     * @returns todo modificado
     */
    putTodo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const todoEnvio = Object.assign({}, todo);
            // delete todo.id
            console.log(todoEnvio);
            try {
                // peticion a jsonplaceholder
                const responseData = yield axios_1.default.put(`${this.enlaceBase}/${todo.id}`, JSON.stringify(todoEnvio));
                // respuesta de la peticion
                if (!responseData) {
                    return {};
                }
                return todoEnvio;
            }
            catch (error) {
                console.error(`Error en la petición: ${error}`);
                throw new Error('Error en el servidor');
            }
        });
    }
}
exports.PutTodo = PutTodo;
//# sourceMappingURL=putTodo.service.js.map