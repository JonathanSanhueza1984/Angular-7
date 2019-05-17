import keys from './keys';
import { Client } from 'pg';

const pool = new Client(keys);
export default pool;   

