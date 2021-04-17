

// importacion de librerias
import express from 'express'
import logger from "morgan";
import { ControllerTodo } from './routes/todo.controller';


export default class App {
  // atributos de la clase App
  public app: express.Application
  private rutasTodo: ControllerTodo

  // constructor de la clase App
  constructor() {

     // incializacion
    this.rutasTodo = new ControllerTodo()
    this.app = express()
    this.app.use(express.json())
    this.app.use(logger('dev'))
    // inicio routes
    this.rutasTodo.routes(this.app)

  }
}
