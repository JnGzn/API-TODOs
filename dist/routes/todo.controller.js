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
exports.ControllerTodo = void 0;
class ControllerTodo {
    routes(app) {
        // EndPoint GET
        // obtiene el todo por Id y lo retorna
        app.get('/todo', (req, res) => __awaiter(this, void 0, void 0, function* () {
            //
        }));
        // EndPoint GET
        // obtiene el listado de todos y los retorna
        app.get('/todos', (req, res) => __awaiter(this, void 0, void 0, function* () {
            //
        }));
        // EndPoint POST
        // guarda el todo y lo retorna
        app.post('/todo', (req, res) => __awaiter(this, void 0, void 0, function* () {
            //
        }));
        // EndPoint PUT
        // modifa el todo y lo retorna modificado
        app.put('/todo', (req, res) => __awaiter(this, void 0, void 0, function* () {
            //
        }));
        // EndPoint Delete
        // elmiina el todo y lo retorna el id
        app.delete('/todo', (req, res) => __awaiter(this, void 0, void 0, function* () {
            //
        }));
    }
}
exports.ControllerTodo = ControllerTodo;
//# sourceMappingURL=todo.controller.js.map