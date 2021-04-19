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
const deleteTodo_service_1 = require("./deleteTodo.service");
jest.mock('axios');
// MOCK MODELO ERROR
const mockElimiarTodoError = {
    data: {
        data: {
            errors: {
                length: 2,
            },
            message: 'Success',
            statusCode: '500',
        },
    },
};
// MOCK MODELO ERROR
const mockElimiarTodoExito = {
    status: 200,
    statusText: 'OK',
    data: {}
};
// const todoData: Todo = {
//   id: 1
// }
// const todoDataOther: Todo = {
//   id: 1
// }
// const mockDeleteTodo = {
// }
describe('Eliminar Todo', () => {
    let todoDelete;
    test('instancia correctamente', () => {
        todoDelete = new deleteTodo_service_1.DeleteTodo();
        expect(todoDelete).toBeDefined();
    });
    test('validacion de enlace conexion jsonplaceholder', () => {
        expect(todoDelete.enlaceBase).toBeTruthy();
    });
    test('validacion con id incorrecto retorna mensaje de error', () => __awaiter(void 0, void 0, void 0, function* () {
        // axios.get = await jest
        //   .fn()
        //   .mockResolvedValueOnce(mockConsultarParametrosAdquirenciaErrorBack)
        const badStepData = {
            id: 'abc123',
        };
        const result = yield todoDelete.deleteTodo(1);
        console.log(result);
        // expect(todoDelete.deleteTodo(badStepData.id))
    }));
});
//# sourceMappingURL=deleteTodo.test.js.map