using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class User
    {
        public int ID { get; set; }
        [Required]
        [DisplayName("Name")]
        public string name { get; set; }
        [Required]
        [DisplayName("Lastname")]
        public string lastname { get; set; }
        [Required]
        [DisplayName("Birth Date")]
        public DateTime birthdate { get; set; }
        [Required]
        [DisplayName("Ssn")]
        public long identityNo { get; set; }
        [Required]
        [DisplayName("Gender")]
        public Gender gender { get; set; }
    }

    public enum Gender
    {
        Male, Female
    }
}