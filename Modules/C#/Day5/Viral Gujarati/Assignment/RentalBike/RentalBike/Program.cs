using System;
using System.Collections.Generic;


namespace RentalBikes
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Mobike> DetailList = new List<Mobike>();

            Console.WriteLine("Choose One Operation : ");
            Console.WriteLine("1. Add Data\n2. Display Data\n3. Delete Data\n4.Exit From Application");
            Console.Write("Operation : ");
            int operation = Convert.ToInt32(Console.ReadLine());
            while (operation != 4)
            {

                switch (operation)
                {
                    case 1:
                        Mobike person = new Mobike();
                        Console.WriteLine("Enter your Detail : ");
                        person.input();
                        person.Compute();
                        DetailList.Add(person);
                        break;
                    case 2:
                        Console.WriteLine("\n\nIndexNumber\tBikeNumber\tPhoneNumber\tDays\t\tName\t\tCharge");
                        int i = 1;
                        foreach (var item in DetailList)
                        {
                            Console.Write($"{i}.\t");
                            item.display();
                            i++;
                        }
                        Console.ReadLine();
                        break;
                    case 3:
                        Console.WriteLine("Enter Index Number:");
                        int index = Convert.ToInt32(Console.ReadLine())-1;
                        DetailList.RemoveAt(index);
                        Console.WriteLine("Deleted ");

                        break;



                }
                Console.WriteLine("Choose One Operation : ");
                Console.WriteLine("1. Add\n2. Display\n3. Delete\n4.Exit From Application");
                Console.Write("Operation : ");
                operation = Convert.ToInt32(Console.ReadLine());
            }
        }
    }
}
