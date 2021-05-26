using System;

namespace WeekDays
{
    enum Days
    {
        Monday=1,
        Tuesday=2,
        Wednesday=3,
        Thursday=4,
        Friday=5,
        Saturday=6,
        Sunday=7
    }
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("ENTER A DAY NUMBER BETWEEN 1 AND 7");
            int number = Convert.ToInt32(Console.ReadLine());
            switch(number)
            {
                case 1:Console.WriteLine(Days.Monday.ToString());
                    break;

                case 2:Console.WriteLine(Days.Tuesday.ToString());
                    break;
                case 3:
                    Console.WriteLine(Days.Wednesday.ToString());
                    break;
                case 4:
                    Console.WriteLine(Days.Thursday.ToString());
                    break;
                case 5:
                    Console.WriteLine(Days.Friday.ToString());
                    break;
                case 6:
                    Console.WriteLine(Days.Saturday.ToString());
                    break;
                case 7:
                    Console.WriteLine(Days.Sunday.ToString());
                    break;
                default:
                    Console.WriteLine("Invalid Choice");
                    break;
            }

        }
    }
}
