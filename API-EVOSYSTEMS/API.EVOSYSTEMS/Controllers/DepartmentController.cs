using API.EVOSYSTEMS.Models;
using API.EVOSYSTEMS.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.EVOSYSTEMS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DepartmentController : Controller
    {

            private readonly DepartmentService _departmentService;
            public DepartmentController(DepartmentService departmentService)
            {
                _departmentService = departmentService;
            }

            [HttpGet]
            public IActionResult GetAllDepartments()
            {
                IEnumerable<Department> departments = _departmentService.GetAllDepartments();
                if (departments == null)
            {
                return NoContent();
            }
                return Ok(departments);
            }

            [HttpGet("{id}")]
            public  IActionResult GetDepartmentById(Guid id)
            {
                Department department = _departmentService.GetDepartmentById(id);

                if (department == null)
                {
                    return NotFound();
                }
                return Ok(department);
            }

            [HttpPost]
            public IActionResult CreateDepartment([FromBody] Department department)
            {
                if (department == null)
                {
                    return BadRequest();
                }
                _departmentService.CreateDepartment(department);
                return CreatedAtAction(nameof(GetDepartmentById), new { id = department.Id }, department);
            }

            [HttpPut("{id}")]
            public IActionResult UpdateDepartment(Guid id, [FromBody] Department department)
            {
                if (department == null || id != department.Id)
                {
                    return BadRequest();
                }
                _departmentService.UpdateDepartment(department);
                return NoContent();
            }

            [HttpDelete("{id}")]
            public IActionResult DeleteEmployee(Guid id)
            {
                _departmentService.DeleteDepartment(id);

                return NoContent();
            }
        }
    }
