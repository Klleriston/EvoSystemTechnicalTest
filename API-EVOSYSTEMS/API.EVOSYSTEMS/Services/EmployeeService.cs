﻿using API.EVOSYSTEMS.Data;
using API.EVOSYSTEMS.Models;
using Microsoft.EntityFrameworkCore;

namespace API.EVOSYSTEMS.Services
{
    public class EmployeeService
    {
        private readonly EvoSystemDBcontext _dbcontext;

        public EmployeeService(EvoSystemDBcontext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public IEnumerable<Employee> GetAllEmployees() 
        {
            var employees = _dbcontext.Employees.Include(e => e.Department).ToList();
            return employees;
        }

        public Employee GetEmployeeById(Guid id)
        {
            var employee = _dbcontext.Employees.Include(e => e.Department).FirstOrDefault(e => e.Id == id);
            return employee;
        }

        public IEnumerable<Employee> GetEmployeeByDepartment(Guid departmentId)
        {
            var employee = _dbcontext.Employees.Include(e => e.Department)
                .Where(e => e.DepartmentId == departmentId)
                .ToList();

            return employee;
        }

        public void CreateEmployee(Employee employee)
        {
            _dbcontext.Employees.Add(employee);
            _dbcontext.SaveChanges();
        }

        public void UpdateEmployee(Employee employee)
        {
            var existEmployee = _dbcontext.Employees.Find(employee.Id);

            existEmployee.Name = employee.Name;
            existEmployee.Photo = employee.Photo;
            existEmployee.Rg = employee.Rg;

            existEmployee.DepartmentId = employee.DepartmentId;
            
           

            _dbcontext.SaveChanges();
        }

        public void DeleteEmployee(Guid id)
        {
            var employee = _dbcontext.Employees.Find(id);
            if (employee != null)
            {
                _dbcontext.Remove(employee);
                _dbcontext.SaveChanges();
            }
        }
    }
}
