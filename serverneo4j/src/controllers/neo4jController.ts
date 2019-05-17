import {Request, Response} from 'express'
import * as neo4j from 'neo4j-driver';
class Neo4jController{

   public async listneo4j (req: Request, res: Response):Promise<void>{
      const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "toor"));
      const session = driver.session();
      const seeresult = await session.run('MATCH (n:Host) RETURN n LIMIT 25').then(res => {
        console.log(res.records[0].get(0));    
  
         return res;

      });

      res.json(seeresult);
      session.close();
    }
} 
const  neo4jController = new Neo4jController();
export default neo4jController;   


