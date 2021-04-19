import axios, { AxiosResponse } from "axios"
import { ServiceTodo } from '../todo.service';


export class DeleteTodo extends ServiceTodo{

    /**
     * Elmina el todo enviado, es importante tener el Id del todo
     * @param {number} id: id del todo a Eliminar
     * @returns ID del todo eliminado
     */
       async deleteTodo(id: number) :Promise<number> {


        try {
            // peticion a jsonplaceholder
            const responseData: AxiosResponse = await axios.delete(`${this.enlaceBase}/${id}`);

            // respuesta de la peticion
            if(!responseData){
                return -1
            }

            return id;

        } catch (error) {
            console.error(`Error en la petición: ${error}`);
            throw new Error('Error en el servidor')
        }

    }
}