"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const hostsRoutes_1 = __importDefault(require("./routes/hostsRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3001);
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default()); // permite que angular pida a el servidor
        this.app.use(express_1.default.json()); //hace aceptar formato jason de aplicacion cliente
        this.app.use(express_1.default.urlencoded({ extended: false })); //enviar desde un formaulario html
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/hosts', hostsRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();