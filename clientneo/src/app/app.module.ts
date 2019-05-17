import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'; // IMPORTANTNE
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { Neof4listComponent } from './components/neof4list/neof4list.component';
import { PostgresqlinfoComponent } from './components/postgresqlinfo/postgresqlinfo.component';
import{Neo4jsService} from  './services/neo4js.service';

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    Neof4listComponent,
    PostgresqlinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Neo4jsService],
  bootstrap: [AppComponent]

})
export class AppModule { }

