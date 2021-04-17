

// importacion de librerias
import express from 'express'
import logger from "morgan";


export default class App {
  // atributos de la clase App
  public app: express.Application


  // constructor de la clase App
  constructor() {

    // incializacion
    this.app = express()
    this.app.use(express.json())
    this.app.use(logger('dev'))

    // Endpoint HOLA MUNDO
    this.app.get('/', (req, res) => {
        res.send('Hello World!')
    })

  }
}
