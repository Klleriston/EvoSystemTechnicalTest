namespace API.EVOSYSTEMS.Models
{
    public class Department
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Acronym { get; set; }
        public ICollection<Employee> Employees { get; set; }
    }
}
