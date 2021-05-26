using System;

namespace conditionalStatements
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("What is your age?");
            int Age = int.Parse(Console.ReadLine());
            if (Age > 55)
            {
                Console.WriteLine("You are senior Citizen");
            }
            else if (Age > 21)
            {
                Console.WriteLine("You are an Adult");
            }
            else
            {
                Console.WriteLine("You are not a legal adult");
            }

        }
    }
}
