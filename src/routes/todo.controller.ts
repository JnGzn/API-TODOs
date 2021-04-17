// importacion librerias
import express from 'express'


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
            //
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