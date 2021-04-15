using System;

namespace Person
{

    class Program
    {
        static void Main(string[] args)
        {
            Person[] p = new Person[2];

            Console.WriteLine("Enter FirstName, LastName, EmailAddress, Dateofbirth");
            for (int i = 0; i < 1; i++)
            {
                p[i] = new Person();
                p[i].FirstName = Console.ReadLine();
                p[i].LastName = Console.ReadLine();
                p[i].EmailAddress = Console.ReadLine();
                p[i].DateOfBirth = Console.ReadLine();
            }
            Console.WriteLine("\n\n\n");
            Console.WriteLine("FirstName\tLastName\tEmailAddress\tIsAdult\tIsBirthday\tChineseSign\tSunsign");
            Console.WriteLine("\n");
            for (int i = 0; i < 1; i++)
            {
                Console.WriteLine($"{p[i].FirstName}\t\t{p[i].LastName}\t\t{p[i].EmailAddress}\t\t{p[i].DateOfBirth}\t\t{p[i].IsTodayBirth}\t\t{p[i].ChineseSign}\t\t{p[i].SunSign}");
            }

        }
    }
}
