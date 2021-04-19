
import axios from 'axios'
import { Todo } from '../../interfaces/todo.interface';
import { DeleteTodo } from './deleteTodo.service';


jest.mock('axios')

// MOCK MODELO ERROR
const mockElimiarTodoExito = {

    status: 200,
    statusText: 'OK',
    data: {}

}


describe('Eliminar Todo', () => {
  let todoDelete: DeleteTodo;

  test('instancia correctamente', () => {
    todoDelete = new DeleteTodo()
    expect(todoDelete).toBeDefined()
  })

  test('validacion de enlace conexion jsonplaceholder', () => {
    expect(todoDelete.enlaceBase).toBeTruthy()
  })

  test('validacion elimando un elemento', async () => {

    const todoData: any = {
        id: 1
    }

    axios.delete = await jest
      .fn()
      .mockResolvedValueOnce(mockElimiarTodoExito)

    mockElimiarTodoExito.data = todoData

    try {
        const resultData = await todoDelete.deleteTodo(todoData.id)
        expect(resultData).toBeDefined()
        expect(resultData).toEqual(todoData.id)
      } catch (err) {
        expect(err).toBe(-1)
      }

  })


})