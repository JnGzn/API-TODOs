import axios, { AxiosPromise, AxiosResponse } from "axios";
import { response } from "express";
import { Todo } from '../interfaces/todo.interface';

export  class ServiceTodo {

    private enlaceBase: string;

    // Constructor Clase ServiceTodo
    constructor(){
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

    /**
     * Guarda el todo enviado.
     * @param {todo} todo: todo a guardar
     * @returns todo guardado
     */
    async postTodo(todo: Todo) :Promise<Todo> {

        const todoEnvio = {...todo}

        if(!todoEnvio.completed){
            todoEnvio.completed = false
        }
        console.log(todoEnvio)
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

    /**
     * Modifica el todo enviado, es importante tener el Id del todo
     * @param {todo} todo:  todo a modificar
     * @returns todo modificado
     */
    async putTodo(todo: Todo) :Promise<Todo> {

        const todoEnvio = {...todo}
        // delete todo.id
        console.log(todoEnvio)
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

    /**
     * Elmina el todo enviado, es importante tener el Id del todo
     * @param {number} id: id del todo a Eliminar
     * @returns ID del todo eliminado
     */
     async deleteTodo(id: number) :Promise<Todo> {


        try {
            // peticion a jsonplaceholder
            const responseData: AxiosResponse = await axios.delete(`${this.enlaceBase}/${id}`);
            console.log(responseData)
            // respuesta de la peticion
            if(!responseData){
                return {}
            }

            return {id};

        } catch (error) {
            console.error(`Error en la petición: ${error}`);
            throw new Error('Error en el servidor')
        }

    }

}