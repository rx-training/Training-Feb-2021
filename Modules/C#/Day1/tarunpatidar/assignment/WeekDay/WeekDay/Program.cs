using System;

namespace WeekDay
{
    class Program
    {
        static void Main(string[] args)
        {
            DayOfWeek today = DateTime.Today.DayOfWeek;
            Console.WriteLine("Today is {0}", today);

            if (today == DayOfWeek.Monday)
            {
                Console.WriteLine("DO WORK");
            }

            Console.WriteLine("{0}, {1}, {2}, {3}, {4}, {5}, {6}",
                DayOfWeek.Monday,
                DayOfWeek.Tuesday,
                DayOfWeek.Wednesday,
                DayOfWeek.Thursday,
                DayOfWeek.Friday,
                DayOfWeek.Saturday,
                DayOfWeek.Sunday);
        }

    }
}
