"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importacion de librerias
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
class App {
    // constructor de la clase App
    constructor() {
        // incializacion
        this.app = express_1.default();
        this.app.use(express_1.default.json());
        this.app.use(morgan_1.default('dev'));
        // Endpoint HOLA MUNDO
        this.app.get('/', (req, res) => {
            res.send('Hello World!');
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map