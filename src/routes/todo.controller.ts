// importacion librerias
import express from 'express'
import { DeleteTodo } from "../services/DELETE/deleteTodo.service";
import { schemaTodoDelete, schemaTodoGet, schemaTodoPost, schemaTodoPut } from './../validators/todo.validator';
import { GetTodo } from '../services/GET/getTodo.service';
import { PostTodo } from '../services/POST/postTodo.service';
import { PutTodo } from '../services/PUT/putTodo.service';



export  class ControllerTodo {


    public routes(app: any){


        // EndPoint GET
        // obtiene el todo por Id y lo retorna
        app.get('/todo', async (req : express.Request, res: express.Response) => {

        // validacion datos
        const data: any = req.query;
        const validation = schemaTodoGet.validate(data)

        // Si hay error en la validacion
        if(validation.error){
            // Responde y funaliza la peticion
            res.status(422).json({
                data: null,
                err: validation.error.message
            }).end()
            return
        }

        try {
            // instancia del servicio
            const todoService = new GetTodo()

            const todo = await todoService.getTodoById(data.id)
            // Responde y funaliza la peticion
            res.status(200).json({
                data: todo
            }).end()

        } catch (error) {

            // Responde y funaliza la peticion
            res.status(404).json({
                data: null,
                err: error
            }).end()
        }
        })

        // EndPoint GET
        // obtiene el listado de todos y los retorna
        app.get('/todos', async (req : express.Request, res: express.Response) => {


            try {

                // instancia del servicio
                const todoService = new GetTodo()

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

            // validacion datos
            const data: any = req.body;
            const validation = schemaTodoPost.validate(data)

            // Si hay error en la validacion
            if(validation.error){
                // Responde y funaliza la peticion
                res.status(422).json({
                    data: null,
                    err: validation.error.message
                }).end()
                return
            }


            try {

                // instancia del servicio
                const todoService = new PostTodo()

                const result = await todoService.postTodo(data)
                // Responde y funaliza la peticion
                res.status(201).json({
                    data: result,
                }).end()

            } catch (error) {
                console.log(error   )
                // Responde y funaliza la peticion
                res.status(500).json({
                    data: null,
                    err: error
                }).end()
            }
        })

        // EndPoint PUT
        // modifa el todo y lo retorna modificado
        app.put('/todo', async (req : express.Request, res: express.Response) => {

            // validacion datos
            const data: any = req.body;
            const validation = schemaTodoPut.validate(data)

            // Si hay error en la validacion
            if(validation.error){
                // Responde y funaliza la peticion
                res.status(422).json({
                    data: null,
                    err: validation.error.message
                }).end()
                return
            }

            try {

                // instancia del servicio
                const todoService = new PutTodo()

                const result = await todoService.putTodo(data)
                // Responde y funaliza la peticion
                res.status(200).json({
                    data: result,
                }).end()

            } catch (error) {
                console.log(error   )
                // Responde y funaliza la peticion
                res.status(500).json({
                    data: null,
                    err: error
                }).end()
            }
        })

        // EndPoint Delete
        // elmiina el todo y lo retorna el id
        app.delete('/todo', async (req : express.Request, res: express.Response) => {

            // validacion datos
            const data: any = req.body;
            const validation = schemaTodoDelete.validate(data)

            // Si hay error en la validacion
            if(validation.error){
                // Responde y funaliza la peticion
                res.status(422).json({
                    data: null,
                    err: validation.error.message
                }).end()
                return
            }

            try {

                // instancia del servicio
                const todoService = new DeleteTodo()

                const result = await todoService.deleteTodo(data.id)
                // Responde y finaliza la peticion
                res.status(200).json({
                    data: result,
                }).end()

            } catch (error) {
                console.log(error   )
                // Responde y finaliza la peticion
                res.status(500).json({
                    data: null,
                    err: error
                }).end()
            }
        })

    }
}