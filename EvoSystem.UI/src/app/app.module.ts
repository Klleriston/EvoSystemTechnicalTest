import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponentsComponent } from './components/employeers/employees-list.components/employees-list.components.component';
import { DepartmentListComponentsComponent } from './components/departments/department-list.components/department-list.components.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponentsComponent,
    DepartmentListComponentsComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
