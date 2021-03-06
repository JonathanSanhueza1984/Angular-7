import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import hostsRoutes from './routes/hostsRoutes';

class Server {
    public app: Application; //

    constructor(){ // cuando se llame va a ser lo primero que va a hacer
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void { // encargado de configurar esta propiedad
        this.app.set('port', process.env.PORT || 3001)
        this.app.use(morgan("dev"));
        this.app.use(cors()); // permite que angular pida a el servidor
        this.app.use(express.json()); //hace aceptar formato jason de aplicacion cliente
        this.app.use(express.urlencoded({extended: false})); //enviar desde un formaulario html
    }

    routes():void { // define de app las rutas del servidor
        this.app.use ('/',indexRoutes);
        this.app.use ('/api/hosts',hostsRoutes);
     }

    start():void{ //inicia servidor a la escucha
        this.app.listen(this.app.get('port'), () => {
        console.log('Server on port ',this.app.get('port'));
        });
    }
 
}     
const server = new Server();
server.start();