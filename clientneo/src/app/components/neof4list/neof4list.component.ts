import { Component, OnInit, HostBinding } from '@angular/core';
import {Neo4jsService } from '../../services/neo4js.service';
import {neo4j} from 'neovis.js/dist/neovis'


@Component({
  selector: 'app-neof4list',
  templateUrl: './neof4list.component.html',
  styleUrls: ['./neof4list.component.css']
})
export class Neof4listComponent implements OnInit {
  @HostBinding ('class') classes ='row'; 
  neo4js: any = [];
  constructor(private neo4jsService:Neo4jsService) { }

  ngOnInit() {

    this.getNeo4js();
  }
  getNeo4js() {

    this.neo4jsService.getNeo4js().subscribe(
       res => {
         this.neo4js = res;
        return console.log(res);
      },
       err => console.error(err)
    );
  }
    
}


   

  