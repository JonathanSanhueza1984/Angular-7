import { Injectable } from '@angular/core';
// agregado  sireve para pedir datos
import { HttpClient } from '@angular/common/http';
import { Neo4js } from '../models/Neo4js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Neo4jsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getNeo4js() {
    return this.http.get(`${this.API_URI}/neo4js`);
  }

  
}

