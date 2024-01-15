using API.EVOSYSTEMS.Data;
using API.EVOSYSTEMS.Models;
using Microsoft.EntityFrameworkCore;

namespace API.EVOSYSTEMS.Services
{
    public class DepartmentService
    {
        private readonly EvoSystemDBcontext _dbcontext;

        public DepartmentService(EvoSystemDBcontext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public ICollection<Department> GetAllDepartments()
        {
            var departments = _dbcontext.Departments.ToList();
            return departments;
        }

        public Department GetDepartmentById(Guid id)
        {
            var department = _dbcontext.Departments.FirstOrDefault(d => d.Id == id);
            return department;
        }

        public void CreateDepartment(Department department)
        {
            _dbcontext.Departments.Add(department);
            _dbcontext.SaveChanges();
        }

        public void UpdateDepartment(Department department)
        {
            _dbcontext.Update(department);
            _dbcontext.SaveChanges();
        }

        public void DeleteDepartment(Guid id)
        {
            var department = _dbcontext.Departments.Find(id);
            if (department != null)
            {
                _dbcontext.Remove(department);
                _dbcontext.SaveChanges();
            }
        }
    }
}
