import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from 'src/app/models/department';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  url: string = environment.baseAPIurl;
  constructor(private http: HttpClient) { }

  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.url}/api/Department`)
  }

  getDepartmentByID(id: string): Observable<Department> {
    return this.http.get<Department>(`${this.url}/api/Department/${id}`)
  }

  addDepartment(addDepartmentReq: Department): Observable<Department> {
    addDepartmentReq.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Department>(`${this.url}/api/Department`, addDepartmentReq)
  }

  updateDepartment(id: string, updateDepartment: Department): Observable<Department> {
    return this.http.put<Department>(`${this.url}/api/Department/${id}`, updateDepartment)
  }

  deleteDepartment(id: string): Observable<Department> {
    return this.http.delete<Department>(`${this.url}/api/Department/${id}`)
  }


}
