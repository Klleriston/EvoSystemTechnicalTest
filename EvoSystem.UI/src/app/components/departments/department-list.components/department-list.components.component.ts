import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { DepartmentsService } from 'src/app/services/departments/departments.service';

@Component({
  selector: 'app-department-list.components',
  templateUrl: './department-list.components.component.html',
  styleUrls: ['./department-list.components.component.css']
})
export class DepartmentListComponentsComponent implements OnInit {
  departments: Department[] = [];
  constructor(private departmentService: DepartmentsService,  private router: Router) { }

  toAddDepartment() {
    this.router.navigateByUrl('departments/add')
  }

  showEmployeesByDepartment(departmentId: string) {
    this.router.navigate(['employees'], { queryParams: { departmentId } });
  }

  ngOnInit(): void {
    this.departmentService.getAllDepartments().subscribe({
      next: (departments) => {
        this.departments = departments;
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

}
