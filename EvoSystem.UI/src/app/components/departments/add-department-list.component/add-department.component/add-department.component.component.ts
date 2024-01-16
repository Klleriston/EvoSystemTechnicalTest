import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { DepartmentsService } from 'src/app/services/departments/departments.service';

@Component({
  selector: 'app-add-department.component',
  templateUrl: './add-department.component.component.html',
  styleUrls: ['./add-department.component.component.css']
})
export class AddDepartmentComponentComponent implements OnInit {
  addDepartmentReq: Department = {
    id: '',
    name: '',
    acronym: ''
  }
  constructor(private departmentService: DepartmentsService, private router: Router) { }

  ngOnInit(): void {
  }

  addDepartment() {
    this.departmentService.addDepartment(this.addDepartmentReq).subscribe({
      next: (department) => {
        this.router.navigate(['departments'])
      }
    })
  }

}
