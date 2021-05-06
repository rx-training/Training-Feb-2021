using System;

namespace WeekDays
{
    class Program
    {
        public enum WeekDays
        {
            Sunday,
            Monday,
            Tuesday,
            Wednesday,
            Thursday,
            Friday,
            Saturday

        }
        static void Main(string[] args)
        {
         
            Console.WriteLine("Enter Number between 0 to 6 : ");
            int weekNumber = int.Parse(Console.ReadLine());
            Console.WriteLine($"Name of WeekNumber {weekNumber} is {(WeekDays)weekNumber}");

        }
    }
}
