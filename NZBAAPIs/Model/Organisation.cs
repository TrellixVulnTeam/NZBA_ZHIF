namespace NZBAAPIs.Model
{
    public class Organisation
    {
        public int Id { get; set; }
        public string OrgName { get; set; }
        public string? ShortCode { get; set; }
        public string? GSTNumber { get; set; }
        public string? AddressStreet1 { get; set; }
        public string? AddressCityTown { get; set; }
        public string? PostCode { get; set; }
        public string? PhonePrefix { get; set; }
        public string? Phone { get; set; }
        

    }
}
