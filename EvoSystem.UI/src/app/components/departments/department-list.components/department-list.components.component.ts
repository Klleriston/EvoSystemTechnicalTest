import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-department-list.components',
  templateUrl: './department-list.components.component.html',
  styleUrls: ['./department-list.components.component.css']
})
export class DepartmentListComponentsComponent implements OnInit {
  departments: Department[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
