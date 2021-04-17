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
exports.ServiceTodo = void 0;
const axios_1 = __importDefault(require("axios"));
class ServiceTodo {
    // Constructor Clase ServiceTodo
    constructor() {
        this.id = -1;
        this.userId = -1;
        this.title = '';
        this.completed = false;
        this.enlaceBase = 'https://jsonplaceholder.typicode.com/todos';
    }
    /**
     * obtiene el listado de los todos
     * @returns listado todos
     */
    getListTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // peticion a jsonplaceholder
                const responseData = yield axios_1.default.get(this.enlaceBase);
                // respuesta de la peticion
                const todos = responseData.data;
                return todos;
            }
            catch (error) {
                console.error(`Error en la petición: ${error}`);
                throw new Error('Error en el servidor');
            }
        });
    }
    /**
     * Busca el todo por el Id
     * @param {number} id: id del todo a buscar
     * @returns todo encontrado
     */
    getTodoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // peticion a jsonplaceholder
                const responseData = yield axios_1.default.get(`${this.enlaceBase}/${id}`);
                // respuesta de la peticion
                if (!responseData) {
                    return {};
                }
                const todo = responseData.data;
                return todo;
            }
            catch (error) {
                console.error(`Error en la petición: ${error}`);
                throw new Error('Error en el servidor');
            }
        });
    }
}
exports.ServiceTodo = ServiceTodo;
//# sourceMappingURL=todo.service.js.map