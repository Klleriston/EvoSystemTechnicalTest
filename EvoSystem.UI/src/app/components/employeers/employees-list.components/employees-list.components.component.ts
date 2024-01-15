import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employees-list.components',
  templateUrl: './employees-list.components.component.html',
  styleUrls: ['./employees-list.components.component.css']
})
export class EmployeesListComponentsComponent implements OnInit {
  employees: Employee[] = [];
  constructor() { }

  ngOnInit(): void {
    this.employees
  }

}
