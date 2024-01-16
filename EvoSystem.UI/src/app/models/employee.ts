import { Department } from "./department";

export interface EmployeeBody {
    id: string;
    name: string;
    photo: string;
    rg: number;
    departmentId: string;
}

export interface EmployeeDTO {
    id: string;
    name: string;
    photo: string;
    rg: number;
    departmentId: string;
    department: Department;
}