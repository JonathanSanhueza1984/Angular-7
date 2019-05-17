import * as neo4j from 'neo4j-driver';
const uri = "bolt://localhost:7474"
const user = "neo4j"
const password = "toor"
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
const db = driver.session();
export default db;   


