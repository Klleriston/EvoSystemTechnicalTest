import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { DepartmentsService } from 'src/app/services/departments/departments.service';

@Component({
  selector: 'app-edit-department.components',
  templateUrl: './edit-department.components.component.html',
  styleUrls: ['./edit-department.components.component.css']
})
export class EditDepartmentComponentsComponent implements OnInit {
  departmentDetail: Department = {
    id: '',
    name: '',
    acronym: ''
  }
  constructor(private route:ActivatedRoute, private departmentService: DepartmentsService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.departmentService.getDepartmentByID(id).subscribe({
            next: (response) => {
              this.departmentDetail = response;
            }
          })
        }
      }
    })
  }

  updateDepartment(){
    this.departmentService.updateDepartment(this.departmentDetail.id, this.departmentDetail).subscribe({
      next: (response) => {
        this.router.navigate(['departments'])
      }
    })
  }

  deleteDepartment(id:string){
    this.departmentService.deleteDepartment(id).subscribe({
      next: (response) => {
        this.router.navigate(['departments'])
      }
    })
  }

}
