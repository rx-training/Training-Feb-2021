using System;

namespace Eligible
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter the Age : ");
            int Age = int.Parse(Console.ReadLine());
            string Ans = (Age > 18) ? "Eligible for Vote" : "Not Eligible";
            Console.WriteLine(Ans);

        }
    }
}
