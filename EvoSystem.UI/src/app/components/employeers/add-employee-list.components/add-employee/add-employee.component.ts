import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeBody } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeReq: EmployeeBody = {
    id: '',
    name: '',
    photo: '',
    rg: 0,
    departmentId: '',

  }
  constructor(private employeeService: EmployeesService, private router: Router) { }
  ngOnInit(): void {
  }

  addEmployee() {
    this.employeeService.addEmployee(this.addEmployeeReq).subscribe({
      next: (employee) => {
        this.router.navigate(['employees'])
      }
    })
  }

}
