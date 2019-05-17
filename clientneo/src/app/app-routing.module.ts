import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Neof4listComponent} from './components/neof4list/neof4list.component';
import {  PostgresqlinfoComponent} from './components/postgresqlinfo/postgresqlinfo.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/neo4js',
    pathMatch:'full'
  },
  {
      path:'neo4js',
      component: Neof4listComponent
  },
  {
    path:'neo4js/info',
    component: PostgresqlinfoComponent
  },  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

