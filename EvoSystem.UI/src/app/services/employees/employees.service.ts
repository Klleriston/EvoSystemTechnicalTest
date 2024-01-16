import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeBody, EmployeeDTO } from 'src/app/models/employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  url: string = environment.baseAPIurl;
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<EmployeeDTO[]> {
    return this.http.get<EmployeeDTO[]>(`${this.url}/api/Employees`)
  }

  getEmployeeByID(id: string): Observable<EmployeeDTO> {
    return this.http.get<EmployeeDTO>(`${this.url}/api/Employees/${id}`)
  }

  addEmployee(addEmployeeReq: EmployeeBody): Observable<EmployeeBody> {
    addEmployeeReq.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<EmployeeBody>(`${this.url}/api/Employees`, addEmployeeReq)
  }

  updateEmployee(id: string, updateEmployeeReq: EmployeeBody): Observable<EmployeeBody> {
    return this.http.put<EmployeeBody>(`${this.url}/api/Employees/${id}`, updateEmployeeReq)
  }

  deleteEmployee(id: string): Observable<EmployeeBody> {
    return this.http.delete<EmployeeBody>(`${this.url}/api/Employees/${id}`)
  }

  getEmployeesByDepartment(departmentId: string): Observable<EmployeeDTO[]> {
      return this.http.get<EmployeeDTO[]>(`${this.url}/api/Employees/employeeByDepartment/${departmentId}`);
  }
}
