using System;
using System.Collections;
using System.Collections.Generic;


namespace day5Assign
{
    class Bike
    {
        string BikeNumber { get; set; }
        string Name { get; set; }
        double contactNumber { get; set; }

        int days { get; set; }

        int rent { get; set; }

        public void Input()
        {
            Console.WriteLine("Enter ur Name :");
            Name = Console.ReadLine();
            Console.WriteLine("Enter contact number :");
            contactNumber = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Enter Bike Number: ");
            BikeNumber = Console.ReadLine();
            Console.WriteLine("Enter the No . of days to get bike as a rent :");
            days = Convert.ToInt32(Console.ReadLine());

        }

        public void Compute()
        {
            int i = 1;
            rent = 0;
            while(days > 0 )
            {
                if (i < 6)
                {
                    rent += 500;
                }
                else if (i > 5 && i< 11)
                {
                    rent += 400;
                }
                else
                {
                    rent += 200;
                }
                i++;
                days -= 1;

            }
            Console.WriteLine(rent);
        }
        public void Display()
        {
            ////Console.WriteLine("Bike Number\t\t Name \t\t Number of Days \t\t Phone Number \t\t Charge :");
            Console.WriteLine("  \t\t"+Name +"\t\t" + BikeNumber + "\t\t" + contactNumber + "\t\t" + days + "\t\t" + rent);

        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            //Bike b = new Bike();
            //b.Input();
            //b.Compute();
            List<Bike> CustomerDetails = new List<Bike>() { };

            Console.WriteLine("------Welcome ------\n\n");
            Console.WriteLine("Choose one operations:\n ");
            Console.WriteLine("\n1.Add \n 2.Display \n 3.Delete \n 4. Exit");
            Console.WriteLine("Operations:  ");
            int op = Convert.ToInt32(Console.ReadLine());
            while (op != 4)
            {
                switch (op)
                {
                    case 1:
                        Bike b = new Bike();
                        Console.WriteLine("Enter ur Deatils :");
                        b.Input();
                        b.Compute();
                        CustomerDetails.Add(b);
                        break;

                    case 2:
                        Console.WriteLine("\n\n Indexnumber \t\tName \t\t BikeNumber \t\t Phone Number \t\t Days \t\t Charge  ");
                        Console.WriteLine("---------------------------------------------------------------------------------------");
                        int i = 1;

                        foreach (var item in CustomerDetails)
                        {
                            Console.Write($"{i}.\t");
                            item.Display();
                            i++;
                        }
                        Console.ReadLine();
                        break;

                    case 3: if(CustomerDetails.Count <= 0)
                        {
                            Console.WriteLine("\n List is Empty");
                            Console.ReadLine();
                            break;
                        }
                        Console.WriteLine("Enter Index Number u want to delete :");
                        int index = Convert.ToInt32(Console.ReadLine());
                        CustomerDetails.RemoveAt(index + 1);

                        break;
                }
                Console.Clear();

                Console.WriteLine("------Welcome ------\n\n");
                Console.WriteLine("Choose one operations:\n");
                Console.WriteLine("\n1.Add \n 2.Display \n 3.Delete \n 4. Exit");
                Console.WriteLine("Operations:  ");
                 op = Convert.ToInt32(Console.ReadLine());

            }
            
        }
    }
}
