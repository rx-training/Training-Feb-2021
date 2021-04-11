using System;
using System.Collections.Generic;
using System.Text;

namespace RamboRentalBikes
{
    public class Mobike
    {
        private int BikeNumber { get; set; }
        private string PhoneNumber { get; set; }
        private string Name { get; set; }
        private int Days { get; set; }
        private decimal Charge { get; set; }
        public void input()
        {
            Console.Write("CustomerName : ");
            this.Name = Console.ReadLine();
            Console.Write("PhoneName : ");
            this.PhoneNumber = Console.ReadLine();
            Console.Write("BikeNumber : ");
            this.BikeNumber = Convert.ToInt32(Console.ReadLine());
            Console.Write("No. Of Days : ");
            this.Days = Convert.ToInt32(Console.ReadLine());
        }
        public void Compute()
        {
            
            if(this.Days <= 5)
            {
                Charge = (500*this.Days);
            }else if(this.Days >5 && this.Days <= 10)
            {
                Charge = 400 * Days;
            }
            else
            {
                Charge = 200 * Days;
            }
        }
        public void display()
        {
            Console.WriteLine($"\t{BikeNumber}\t\t{PhoneNumber}\t\t{Days}\t\t{Name}\t\t{Charge}");
        }

    }
}
