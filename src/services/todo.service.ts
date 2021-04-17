import axios, { AxiosPromise, AxiosResponse } from "axios";
import { response } from "express";
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

    /**
     * obtiene el listado de los todos
     * @returns listado todos
     */
    async getListTodos(): Promise<Todo[]> {

        try {
            // peticion a jsonplaceholder
            const responseData: AxiosResponse = await axios.get(this.enlaceBase);
            // respuesta de la peticion
            const todos: Todo[] = responseData.data;
            return todos;
        } catch (error) {
            console.error(`Error en la petición: ${error}`);
            throw new Error('Error en el servidor')
        }

    }

    /**
     * Busca el todo por el Id
     * @param {number} id: id del todo a buscar
     * @returns todo encontrado
     */
    async getTodoById(id: number): Promise<Todo> {

        try {
            // peticion a jsonplaceholder
            const responseData: AxiosResponse = await axios.get(`${this.enlaceBase}/${id}`);
            // respuesta de la peticion
            if(!responseData){
                return {}
            }

            const todo = responseData.data;
            return todo;

        } catch (error) {
            console.error(`Error en la petición: ${error}`);
            throw new Error('Error en el servidor')
        }


    }


}