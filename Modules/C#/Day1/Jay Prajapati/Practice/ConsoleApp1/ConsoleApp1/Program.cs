using System;
// Find sum of integer 1 to 20 that are divisible by 3.
namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            int sum = 0;
            for (int i = 1; i < 20; i++){
                if (i % 3 == 0) {
                    sum = sum + i;
                }
            }
            Console.WriteLine($"Sum Of integer from 1 to 20 which are divisible by 3 is : {sum}");
        }
    }
}
