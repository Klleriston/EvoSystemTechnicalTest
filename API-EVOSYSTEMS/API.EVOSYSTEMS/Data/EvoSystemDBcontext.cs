using API.EVOSYSTEMS.Models;
using Microsoft.EntityFrameworkCore;

namespace API.EVOSYSTEMS.Data
{
    public class EvoSystemDBcontext : DbContext
    {
        public EvoSystemDBcontext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Department> Departments { get; set; }

    }
}
