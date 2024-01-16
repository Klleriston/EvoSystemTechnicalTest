import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponentsComponent } from './components/departments/department-list.components/department-list.components.component';
import { EmployeesListComponentsComponent } from './components/employeers/employees-list.components/employees-list.components.component';
import { AddEmployeeComponent } from './components/employeers/add-employee-list.components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employeers/edit-employee.component/edit-employee/edit-employee.component';
import { EditDepartmentComponentsComponent } from './components/departments/edit-department-list.component/edit-department.components/edit-department.components.component';
import { AddDepartmentComponentComponent } from './components/departments/add-department-list.component/add-department.component/add-department.component.component';
import { EmploDepartmentIDComponent } from './components/employeers/employeers-department.component/emplo-department-id/emplo-department-id.component';

const routes: Routes = [
  {path: '', component:DepartmentListComponentsComponent},
  {path: 'departments', component:DepartmentListComponentsComponent},
  {path: 'departments/add', component: AddDepartmentComponentComponent},
  {path: 'departments/edit/:id', component: EditDepartmentComponentsComponent},
  {path: 'employees', component:EmployeesListComponentsComponent},
  {path: 'employees/add', component: AddEmployeeComponent},
  {path: 'employees/edit/:id', component: EditEmployeeComponent},
  {path: 'employees/department/:id', component: EmploDepartmentIDComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
