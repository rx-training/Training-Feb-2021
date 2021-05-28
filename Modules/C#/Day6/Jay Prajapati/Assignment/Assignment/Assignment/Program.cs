using System;

namespace Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            // Find Area of Rectangle using Func delegate
            Console.WriteLine("Hello World!");
            Func<int, int, int> AreaOfrect = Area;
            Console.Write("Enter Length and Width of Rectangle : ");
            int A = Convert.ToInt32(Console.ReadLine());
            int B = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine($"Area OF Rectangle is : {AreaOfrect(A, B)}");

            int Area(int a, int b)
            {
                return a * b;
            }

        }
    }
}
