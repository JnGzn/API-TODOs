
import axios from 'axios'
import { PostTodo } from './postTodo.service';




jest.mock('axios')

// MOCK MODELO ERROR
const mockPostTodoExito = {

    status: 200,
    statusText: 'OK',
    data: {}

}


describe('POST Todo', () => {
  let todoPost: PostTodo;

  test('instancia correctamente', () => {
    todoPost = new PostTodo()
    expect(todoPost).toBeDefined()
  })

  test('validacion de enlace conexion jsonplaceholder', () => {
    expect(todoPost.enlaceBase).toBeTruthy()
  })

  test('validacion agregando un elemento', async () => {

    const dataResponse: any = {
        id: 1,
        userId: 1,
        completed: false,
        title: "Test"
    }

    axios.post = await jest
      .fn()
      .mockResolvedValueOnce(mockPostTodoExito)

      mockPostTodoExito.data = dataResponse


    try {
        const resultData = await todoPost.postTodo(dataResponse)

        expect(resultData).toBeDefined()
        expect(resultData).toMatchObject(dataResponse)

      } catch (err) {
        expect(err).toBe(-1)
      }

  })




})