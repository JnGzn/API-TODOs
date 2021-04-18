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
const todo_service_1 = require("../services/todo.service");
const todo_validator_1 = require("./../validators/todo.validator");
class ControllerTodo {
    routes(app) {
        // EndPoint GET
        // obtiene el todo por Id y lo retorna
        app.get('/todo', (req, res) => __awaiter(this, void 0, void 0, function* () {
            // validacion datos
            const data = req.query;
            const validation = todo_validator_1.schemaTodoGet.validate(data);
            // Si hay error en la validacion
            if (validation.error) {
                // Responde y funaliza la peticion
                res.status(422).json({
                    data: null,
                    err: validation.error.message
                }).end();
                return;
            }
            try {
                // instancia del servicio
                const todoService = new todo_service_1.ServiceTodo();
                const todo = yield todoService.getTodoById(data.id);
                // Responde y funaliza la peticion
                res.status(200).json({
                    data: todo
                }).end();
            }
            catch (error) {
                // Responde y funaliza la peticion
                res.status(404).json({
                    data: null,
                    err: error
                }).end();
            }
        }));
        // EndPoint GET
        // obtiene el listado de todos y los retorna
        app.get('/todos', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                // instancia del servicio
                const todoService = new todo_service_1.ServiceTodo();
                const result = yield todoService.getListTodos();
                // Responde y funaliza la peticion
                res.status(200).json({
                    data: result,
                }).end();
            }
            catch (error) {
                // Responde y funaliza la peticion
                res.status(500).json({
                    data: null,
                    err: error
                }).end();
            }
        }));
        // EndPoint POST
        // guarda el todo y lo retorna
        app.post('/todo', (req, res) => __awaiter(this, void 0, void 0, function* () {
            // validacion datos
            const data = req.body;
            const validation = todo_validator_1.schemaTodoPost.validate(data);
            // Si hay error en la validacion
            if (validation.error) {
                // Responde y funaliza la peticion
                res.status(422).json({
                    data: null,
                    err: validation.error.message
                }).end();
                return;
            }
            try {
                // instancia del servicio
                const todoService = new todo_service_1.ServiceTodo();
                const result = yield todoService.postTodo(data);
                // Responde y funaliza la peticion
                res.status(201).json({
                    data: result,
                }).end();
            }
            catch (error) {
                console.log(error);
                // Responde y funaliza la peticion
                res.status(500).json({
                    data: null,
                    err: error
                }).end();
            }
        }));
        // EndPoint PUT
        // modifa el todo y lo retorna modificado
        app.put('/todo', (req, res) => __awaiter(this, void 0, void 0, function* () {
            // validacion datos
            const data = req.body;
            const validation = todo_validator_1.schemaTodoPut.validate(data);
            // Si hay error en la validacion
            if (validation.error) {
                // Responde y funaliza la peticion
                res.status(422).json({
                    data: null,
                    err: validation.error.message
                }).end();
                return;
            }
            try {
                // instancia del servicio
                const todoService = new todo_service_1.ServiceTodo();
                const result = yield todoService.putTodo(data);
                // Responde y funaliza la peticion
                res.status(200).json({
                    data: result,
                }).end();
            }
            catch (error) {
                console.log(error);
                // Responde y funaliza la peticion
                res.status(500).json({
                    data: null,
                    err: error
                }).end();
            }
        }));
        // EndPoint Delete
        // elmiina el todo y lo retorna el id
        app.delete('/todo', (req, res) => __awaiter(this, void 0, void 0, function* () {
            // validacion datos
            const data = req.body;
            const validation = todo_validator_1.schemaTodoDelete.validate(data);
            // Si hay error en la validacion
            if (validation.error) {
                // Responde y funaliza la peticion
                res.status(422).json({
                    data: null,
                    err: validation.error.message
                }).end();
                return;
            }
            try {
                // instancia del servicio
                const todoService = new todo_service_1.ServiceTodo();
                const result = yield todoService.deleteTodo(data.id);
                // Responde y finaliza la peticion
                res.status(200).json({
                    data: result,
                }).end();
            }
            catch (error) {
                console.log(error);
                // Responde y finaliza la peticion
                res.status(500).json({
                    data: null,
                    err: error
                }).end();
            }
        }));
    }
}
exports.ControllerTodo = ControllerTodo;
//# sourceMappingURL=todo.controller.js.map