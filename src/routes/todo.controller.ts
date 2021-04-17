// importacion librerias
import express from 'express'
import axios from "axios";
import { ServiceTodo } from "../services/todo.service";


export  class ControllerTodo {


    public routes(app: any){


        // EndPoint GET
        // obtiene el todo por Id y lo retorna
        app.get('/todo', async (req : express.Request, res: express.Response) => {
           //
        })

        // EndPoint GET
        // obtiene el listado de todos y los retorna
        app.get('/todos', async (req : express.Request, res: express.Response) => {


            try {

                // instancia del servicio
                const todoService = new ServiceTodo()

                const result = await todoService.getListTodos()
                // Responde y funaliza la peticion
                res.status(200).json({
                    data: result,
                }).end()

            } catch (error) {
                // Responde y funaliza la peticion
                res.status(500).json({
                    data: null,
                    err: error
                }).end()
            }
        })

        // EndPoint POST
        // guarda el todo y lo retorna
        app.post('/todo', async (req : express.Request, res: express.Response) => {
            //
        })

        // EndPoint PUT
        // modifa el todo y lo retorna modificado
        app.put('/todo', async (req : express.Request, res: express.Response) => {
            //
        })

        // EndPoint Delete
        // elmiina el todo y lo retorna el id
        app.delete('/todo', async (req : express.Request, res: express.Response) => {
            //
        })

    }
}