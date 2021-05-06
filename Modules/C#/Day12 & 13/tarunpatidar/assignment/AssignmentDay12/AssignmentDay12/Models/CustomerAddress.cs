namespace AssignmentDay12.Models
{
    public class CustomerAddress
    {
        public int CustomerAddressId { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
    }
}