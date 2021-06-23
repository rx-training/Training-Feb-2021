using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBigBasket.Models
{
    public class Register
    {
        /*[Required(ErrorMessage = "Customer Name is required")]

        public string CustomerName { get; set; }*/
        [Required(ErrorMessage = "User Name is required")]
        public string Username { get; set; }

        [EmailAddress]
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }

        /*[Required(ErrorMessage = "Phone Number is required")]
        public string PhoneNumber { get; set; }*/
    }
}
