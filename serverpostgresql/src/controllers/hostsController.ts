import {Request, Response} from 'express'
import pool from '../database'
import { Client } from 'pg';
class HostsController{

   public async list (req: Request, res: Response):Promise<void>{
     const hosts = await pool.query('SELECT * FROM ng_hosts');
        res.json(hosts);
        await pool.end();
    } 

    public async getOne (req: Request, res: Response): Promise<any>{
          
          const { id } = req.params;
          console.log(id);
          await  pool.connect();          
          const hosts = await pool.query('SELECT * FROM ng_hosts WHERE "Id" = $1', [id]);
          if (hosts.rowCount > 0) {
            return res.json(hosts.rows[0]);  
         }
         res.status(404).json({ text: "The game doesn't exits" });
         await pool.end();        
    }  
}
const  hostsController = new HostsController();
export default hostsController;  