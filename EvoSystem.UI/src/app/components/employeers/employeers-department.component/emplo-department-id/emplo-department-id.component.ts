import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeBody, EmployeeDTO } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'app-emplo-department-id',
  templateUrl: './emplo-department-id.component.html',
  styleUrls: ['./emplo-department-id.component.css']
})
export class EmploDepartmentIDComponent implements OnInit {
 employees: EmployeeDTO[] = [];
  constructor(private route:ActivatedRoute, private employeesService:EmployeesService, private router:Router) { }

  toAddEmployee() {
    this.router.navigateByUrl('employees/add')
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const departmentId = params.get('departmentId');

        if (departmentId) {
          console.log('departmentId:', departmentId);
          this.employeesService.getEmployeesByDepartment(departmentId)
            .subscribe({
              next: (response) => {
                this.employees = response;
              }
            });
        }
      }
    })
  }
}

