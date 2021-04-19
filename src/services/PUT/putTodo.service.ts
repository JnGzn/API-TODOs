import axios, { AxiosResponse } from "axios";
import { Todo } from "interfaces/todo.interface";
import { ServiceTodo } from '../todo.service';


export class PutTodo extends ServiceTodo{

    /**
     * Modifica el todo enviado, es importante tener el Id del todo
     * @param {todo} todo:  todo a modificar
     * @returns todo modificado
     */
    async putTodo(todo: Todo) :Promise<Todo> {

        const todoEnvio = {...todo}
        // delete todo.id
        try {
            // peticion a jsonplaceholder
            const responseData: AxiosResponse = await axios.put(`${this.enlaceBase}/${todo.id}`, JSON.stringify(todoEnvio));
            // respuesta de la peticion
            if(!responseData){
                return {}
            }

            return todoEnvio;

        } catch (error) {
            console.error(`Error en la petición: ${error}`);
            throw new Error('Error en el servidor')
        }

    }
}