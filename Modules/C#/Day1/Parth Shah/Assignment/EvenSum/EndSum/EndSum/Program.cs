using System;

namespace EndSum
{
    class Program
    {
        static void Main(string[] args)
        {
            int i, num, sum = 0;

            // Reading number
            Console.Write("Enter any number: ");
            num = Convert.ToInt32(Console.ReadLine());

            for (i = 2; i <= num; i += 2)
            {
                //Adding current even number to sum variable
                Console.WriteLine("{0}", i);
                sum += i;
            }
            Console.WriteLine("Sum of all even number between 1 to " + num + " = " + sum);

            Console.ReadLine();
        }
    }
}
