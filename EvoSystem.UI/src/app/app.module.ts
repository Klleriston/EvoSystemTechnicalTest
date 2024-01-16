import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponentsComponent } from './components/employeers/employees-list.components/employees-list.components.component';
import { DepartmentListComponentsComponent } from './components/departments/department-list.components/department-list.components.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './components/employeers/add-employee-list.components/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './components/employeers/edit-employee.component/edit-employee/edit-employee.component';
import { AddDepartmentComponentComponent } from './components/departments/add-department-list.component/add-department.component/add-department.component.component';
import { EditDepartmentComponentsComponent } from './components/departments/edit-department-list.component/edit-department.components/edit-department.components.component';
import { EmploDepartmentIDComponent } from './components/employeers/employeers-department.component/emplo-department-id/emplo-department-id.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponentsComponent,
    DepartmentListComponentsComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    AddDepartmentComponentComponent,
    EditDepartmentComponentsComponent,
    EmploDepartmentIDComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
