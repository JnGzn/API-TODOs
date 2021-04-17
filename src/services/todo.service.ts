import axios from "axios";
import { Todo } from '../interfaces/todo.interface';

export  class ServiceTodo {

    // atributos Clase ServiceTodo
    private userId: number;
    private id: number;
    private title: string;
    private completed: boolean;
    private enlaceBase: string;

    // Constructor Clase ServiceTodo
    constructor(){
        this.id = -1
        this.userId = -1
        this.title = ''
        this.completed = false
        this.enlaceBase = 'https://jsonplaceholder.typicode.com/todos'
    }

    async getListTodos(): Promise<Todo[]> {

        try {
            // peticion a jsonplaceholder
            const response: any = await axios.get(this.enlaceBase);
            // respuesta de la peticion
            const todos: Todo[] = response.data;
            return todos;
        } catch (error) {
            console.error(`Error en la petición: ${error}`);
            throw new Error('Error en el servidor')
        }

    }


}