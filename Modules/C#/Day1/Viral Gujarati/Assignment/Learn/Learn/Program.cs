using System;

public class Learn
{
    enum WeekDays
    {
       
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    static void Main(string[] args)
    {
        Console.WriteLine("Enter number of week day");
        int number = Convert.ToInt32(Console.ReadLine());
        switch (number)
        {
            case 1:
                Console.WriteLine(WeekDays.Monday.ToString());
                break;
            case 2:
                Console.WriteLine(WeekDays.Tuesday.ToString());
                break;
            case 3:
                Console.WriteLine(WeekDays.Wednesday.ToString());
                break;
            case 4:
                Console.WriteLine(WeekDays.Thursday.ToString());
                break;
            case 5:
                Console.WriteLine(WeekDays.Friday.ToString());
                break;
            case 6:
                Console.WriteLine(WeekDays.Saturday.ToString());
                break;
            case 7:
                Console.WriteLine(WeekDays.Sunday.ToString());
                break;
            default:
                Console.WriteLine("Invalid choice");
                break;
        }

    }
}
