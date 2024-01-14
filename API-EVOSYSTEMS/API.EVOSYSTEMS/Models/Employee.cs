namespace API.EVOSYSTEMS.Models
{
    public class Employee
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Photo { get; set; }
        public int Rg { get; set; }
        public Guid DepartmentId { get; set; }
        public Department Department { get; set; }
    }
}
