using System;
using System.Collections.Generic;

namespace FibonacciNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var FibonacciNumber = new List<int> { 1, 1 };
            while(FibonacciNumber.Count<20)
            {
                int Privious = FibonacciNumber[FibonacciNumber.Count - 1];
                int Privious2 = FibonacciNumber[FibonacciNumber.Count - 2];
                FibonacciNumber.Add(Privious + Privious2);
            }
            foreach (int num in FibonacciNumber)
                Console.WriteLine(num);
        }
    }
}
