
import axios from 'axios'
import { PutTodo } from './putTodo.service';





jest.mock('axios')

// MOCK MODELO ERROR
const mockPutTodoExito = {

    status: 200,
    statusText: 'OK',
    data: {}

}


describe('PUT Todo', () => {
  let todoPut: PutTodo;

  test('instancia correctamente', () => {
    todoPut = new PutTodo()
    expect(todoPut).toBeDefined()
  })

  test('validacion de enlace conexion jsonplaceholder', () => {
    expect(todoPut.enlaceBase).toBeTruthy()
  })

  test('validacion modificando un elemento', async () => {

    const dataResponse: any = {
        id: 1,
        userId: 1,
        completed: false,
        title: "Test"
    }

    axios.put = await jest
      .fn()
      .mockResolvedValueOnce(mockPutTodoExito)

      mockPutTodoExito.data = dataResponse

    try {
        const resultData = await todoPut.putTodo(dataResponse)

        expect(resultData).toBeDefined()
        expect(resultData).toMatchObject(dataResponse)

      } catch (err) {
        expect(err).toBe(-1)
      }

  })




})