using System;

namespace SumOfEvenNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter Number :");
            int n = int.Parse(Console.ReadLine());
            int sum = 0;
            string digits = "";
            for(int i=0; i < n; i++)
            {
                if (i % 2 == 0)
                {
                    sum = sum + i;
                    digits = digits.Insert(digits.Length, $"{i} ");
                        
                }
            }
            Console.WriteLine(digits);
            Console.WriteLine(sum);

            
        }
    }
}
