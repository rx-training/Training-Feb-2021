using System;

namespace Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = 18;
            int b = 6;
            int c = a + b;
            Console.WriteLine(c);

            int a1 = 5;
            int b1 = 4;
            int c1 = 2;
            int d1 = (a1 + b1) - 6 * c1 + (12 * 4) / 3 + 12;
            Console.WriteLine(d1);

            int max = int.MaxValue;
            int min = int.MinValue;
            Console.WriteLine($"The range of integers is {min} to {max}");

            double maxd = double.MaxValue;
            double mind = double.MinValue;
            Console.WriteLine($"The range of double is {mind} to {maxd}");
        }
    }
}
