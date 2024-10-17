using System;
using System.ComponentModel.DataAnnotations;

namespace WDP2022A2Mac.Models
{
    public class Company
    {
        public int Id { get; set; }
        [Display(Name = "Company Name")]
        public string CompanyName { get; set; }
        public string Summary { get; set; }
        [Display(Name = "Image Filename")]
        public string ImageFilename { get; set; }
        [Display(Name = "Anchor Link")]
        public string AnchorLink { get; set; }
        [Display(Name = "Vote")]
        public int Like { get; set; }
        public bool canIncreaseLike { get; set; }
    }
}

