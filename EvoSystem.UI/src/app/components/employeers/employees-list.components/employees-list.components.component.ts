import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDTO } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'app-employees-list.components',
  templateUrl: './employees-list.components.component.html',
  styleUrls: ['./employees-list.components.component.css']
})
export class EmployeesListComponentsComponent implements OnInit {
  employees: EmployeeDTO[] = [];
  constructor(private employeeService: EmployeesService, private router: Router) { }

  toAddEmployee() {
    this.router.navigateByUrl('employees/add')
  }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

}
