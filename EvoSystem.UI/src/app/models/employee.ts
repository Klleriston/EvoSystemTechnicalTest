import { Department } from "./department";

export interface EmployeeBody {
    id: string;
    name: string;
    photo: string;
    rg: number;
    departmentID: string;
}

export interface EmployeeDTO {
    id: string;
    name: string;
    photo: string;
    rg: number;
    departmentID: string;
    department: Department;
}

//mandar req -> body
//receber res -> DTO