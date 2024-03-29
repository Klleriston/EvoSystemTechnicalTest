﻿using API.EVOSYSTEMS.Data;
using API.EVOSYSTEMS.Models;
using API.EVOSYSTEMS.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.EVOSYSTEMS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly EvoSystemDBcontext _dbcontext;
        private readonly EmployeeService _employeeService;
        public EmployeesController(EmployeeService employeeService, EvoSystemDBcontext dbcontext)
        {
            _employeeService = employeeService;
            _dbcontext = dbcontext;
        }

        [HttpGet]
        public IActionResult GetAllEmployees()
        {
            IEnumerable<Employee> employees = _employeeService.GetAllEmployees();
            if (employees == null)
            {
                return NoContent();
            }
            return Ok(employees);
        }

        [HttpGet("{id}")]
        public IActionResult GetEmployeeById(Guid id)
        {
            Employee employee = _employeeService.GetEmployeeById(id);

            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }

        [HttpGet("employeeByDepartment/{departmentId}")]
        public IActionResult GetEmployeeByDepartment(Guid departmentId)
        {
            IEnumerable<Employee> employee = _employeeService.GetEmployeeByDepartment(departmentId);

            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }

        [HttpPost]
        public IActionResult CreateEmployee([FromBody] Employee employee)
        {
            if (employee == null)
            {
                return BadRequest();
            }
            _employeeService.CreateEmployee(employee);
            return CreatedAtAction(nameof(GetEmployeeById), new { id = employee.Id }, employee);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateEmployee(Guid id, [FromBody] Employee employee)
        {

            if (employee == null || id != employee.Id)
            {
                return BadRequest();
            }

            _employeeService.UpdateEmployee(employee);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(Guid id)
        {
            _employeeService.DeleteEmployee(id);

            return NoContent();
        }

    }
}
