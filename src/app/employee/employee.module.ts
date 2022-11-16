import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddComponent } from './add/add.component';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ListComponent, AddComponent, ViewComponent, EditComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
})
export class EmployeeModule { }
