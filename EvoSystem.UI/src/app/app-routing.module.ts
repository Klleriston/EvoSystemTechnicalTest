import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponentsComponent } from './components/departments/department-list.components/department-list.components.component';
import { EmployeesListComponentsComponent } from './components/employeers/employees-list.components/employees-list.components.component';

const routes: Routes = [
  {path: '', component:DepartmentListComponentsComponent},
  {path: 'departments', component:DepartmentListComponentsComponent},
  {path: 'employees', component:EmployeesListComponentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
