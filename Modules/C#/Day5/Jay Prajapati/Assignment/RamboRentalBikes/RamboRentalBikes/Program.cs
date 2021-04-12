using System;
using System.Collections.Generic;

namespace RamboRentalBikes
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Mobike> RentalDetails = new List<Mobike>();
           
            Console.WriteLine("------Welcome To Rambo Rental Bikes------\n\n");
            Console.WriteLine("Choose One Operation : ");
            Console.WriteLine("1. Add\n2. Display\n3. Delete\n4. Exit");
            Console.Write("Operation : ");
            int op = Convert.ToInt32(Console.ReadLine());
            while (op != 4)
            {
               
                switch (op)
                {
                    case 1:
                        Mobike person = new Mobike();
                        Console.WriteLine("Enter your Detail : ");
                        person.input();
                        person.Compute();
                        RentalDetails.Add(person);
                        break;
                    case 2:
                        Console.WriteLine("\n\nIndexNumber\tBikeNumber\tPhoneNumber\tDays\t\tName\t\tCharge");
                        Console.WriteLine("---------------------------------------------------------------------------------------\n");
                        int i = 1;
                        foreach (var item in RentalDetails)
                        {
                            Console.Write($"{i}.\t");
                            item.display();
                            i++;
                        }
                        Console.ReadLine();
                        break;
                    case 3: if(RentalDetails.Count <= 0)
                        {
                            Console.WriteLine("\n\tList is Empty");
                            Console.ReadLine();
                            break;
                        }
                        Console.WriteLine("Enter Index Number Of Customer Whose Data you want to delete :");
                        int index = Convert.ToInt32(Console.ReadLine());
                        RentalDetails.RemoveAt(index + 1);
                        Console.WriteLine("Data deleted Successfully....");

                        break;
         
                        

                }
                Console.Clear();
                Console.WriteLine("------Welcome To Rambo Rental Bikes------\n\n");
                Console.WriteLine("Choose One Operation : ");
                Console.WriteLine("1. Add\n2. Display\n3. Delete\n4. Exit\n");
                Console.Write("Operation : ");
                op = Convert.ToInt32(Console.ReadLine());
            }
           
            
         
            

        }
    }
}
