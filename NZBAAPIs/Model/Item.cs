using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace NZBAAPIs.Model
{
    public class Item
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int? Amount { get; set; }
        public string? Description { get; set; }

        [Required]
        [Display(Name = "Organisation")]
        public int OrganisationId { get; set; }

       /* [ForeignKey("OrganisationId")]
        [ValidateNever]
        public Organisation Organisation { get; set; }*/
    }
}
