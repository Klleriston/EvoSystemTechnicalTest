import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeBody, EmployeeDTO } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'app-emplo-department-id',
  templateUrl: './emplo-department-id.component.html',
  styleUrls: ['./emplo-department-id.component.css']
})
export class EmploDepartmentIDComponent implements OnInit {
  employees: EmployeeDTO[] = [];
  constructor(private route:ActivatedRoute,
    private employeesService:EmployeesService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const departmentId = params['departmentId'];
      if (departmentId) {
        this.employeesService.getEmployeesByDepartment(departmentId).subscribe({
          next: (employees) => {
            this.employees = employees;
          },
        });
      }
    });
  }

}

//ver pq nao encontra por id
