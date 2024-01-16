import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeBody, EmployeeDTO } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetail: EmployeeBody = {
    id: '',
    name: '',
    photo: '',
    rg: 0,
    departmentId: '',
  }
  constructor(private route: ActivatedRoute, private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.employeeService.getEmployeeByID(id).subscribe({
            next: (response) => {
              this.employeeDetail = response;
            }
          })
        }
      }
    })
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeDetail.id, this.employeeDetail).subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      }
    });


  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (response) => {
        this.router.navigate(['employees'])
      }
    })
  }

}
