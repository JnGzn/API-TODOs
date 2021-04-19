
import axios from 'axios'
import { GetTodo } from './getTodo.service';



jest.mock('axios')

// MOCK MODELO ERROR
const mockGetTodoExito = {

    status: 200,
    statusText: 'OK',
    data: {}

}


describe('GETs Todo', () => {
  let todoGet: GetTodo;

  test('instancia correctamente', () => {
    todoGet = new GetTodo()
    expect(todoGet).toBeDefined()
  })

  test('validacion de enlace conexion jsonplaceholder', () => {
    expect(todoGet.enlaceBase).toBeTruthy()
  })

  test('validacion obteniendo un elemento', async () => {

    const dataResponse: any = {
        id: 1,
        userId: 1,
        completed: false,
        title: "test"
    }

    axios.get = await jest
      .fn()
      .mockResolvedValueOnce(mockGetTodoExito)

      mockGetTodoExito.data = dataResponse


    try {
        const resultData = await todoGet.getTodoById(dataResponse.id)

        expect(resultData).toBeDefined()
        expect(resultData).toMatchObject(dataResponse)

      } catch (err) {
        expect(err).toBe(-1)
      }

  })


  test('validacion obteniendo todos los elementos', async () => {

    const dataResponse: any = [{
        id: 1,
        userId: 1,
        completed: false,
        title: "test"
    }]

    axios.get = await jest
      .fn()
      .mockResolvedValueOnce(mockGetTodoExito)

      mockGetTodoExito.data = dataResponse


    try {
        const resultData = await todoGet.getListTodos()

        expect(resultData).toBeDefined()
        expect(resultData).toMatchObject(dataResponse)

      } catch (err) {
        expect(err).toBe(-1)
      }

  })


})