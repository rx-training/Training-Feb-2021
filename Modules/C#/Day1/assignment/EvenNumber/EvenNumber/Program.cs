using System;

namespace EvenNumber
{
    class Program
    {
        static void Main(string[] args)
        {

            int i, num, sum = 0;

            Console.Write("Enter any number: ");
            num = Convert.ToInt32(Console.ReadLine());

            for (i = 2; i <= num; i += 2)
            {
                sum += i;
            }
            Console.WriteLine("Sum of all even number between 1 to " + num + " = " + sum);

            Console.ReadLine();
        }
    }
}
