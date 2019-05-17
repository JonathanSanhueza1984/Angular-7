import { Router } from 'express';
import neo4jController from '../controllers/neo4jController';

class Neo4jRoutes{

    public router : Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
            this.router.get('/',neo4jController.listneo4j);
    }    
}

const neo4jRoutes = new Neo4jRoutes(); 
export  default neo4jRoutes.router;