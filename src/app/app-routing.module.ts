import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './employe-list/create/create.component';
import { EmployeListComponent } from './employe-list/employe-list.component';

const routes: Routes = [
   {
    path:'',component:EmployeListComponent
  },
  {
    path:'create',component:CreateComponent
  },
  {
    path:'edit/:id',component:CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
