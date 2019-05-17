import { Router } from 'express';
import hostsController from '../controllers/hostsController';


class HostsRoutes{

    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
       this.router.get('/',hostsController.list);
       this.router.get('/:id',hostsController.getOne);
    }    
}

const hostsRoutes = new HostsRoutes();
export  default hostsRoutes.router;