import axios, { AxiosResponse } from 'axios';
import { Todo } from 'interfaces/todo.interface';
import { ServiceTodo } from '../todo.service';
export class PostTodo extends ServiceTodo{

    /**
     * Guarda el todo enviado.
     * @param {todo} todo: todo a guardar
     * @returns todo guardado
     */
    async postTodo(todo: Todo) :Promise<Todo> {

        const todoEnvio = {...todo}
        
        try {
            // peticion a jsonplaceholder
            const responseData: AxiosResponse = await axios.post(`${this.enlaceBase}`, JSON.stringify(todoEnvio));
            // respuesta de la peticion
            if(!responseData){
                return {}
            }

            todoEnvio.id = responseData.data.id
            return todoEnvio;

        } catch (error) {
            console.error(`Error en la petición: ${error}`);
            throw new Error('Error en el servidor')
        }

    }
}