import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { ViewComponent } from './view/view.component';

const routes: Routes = [  
  {path : '', component : ListComponent},  
  {path : 'list', component : ListComponent},
  {path : 'add', component : AddComponent},  
  {path : 'edit/:id', component : EditComponent},
  {path : 'view/:id', component : ViewComponent},   
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
