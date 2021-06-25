//Task 1 Print sum of all the even numbers
using System;  
public class ConsoleApp1 
{
    public static void Main()
    {
        int i, n, sum = 0;

        Console.Write("Enter number : ");
        n = Convert.ToInt32(Console.ReadLine());
        Console.Write("The even numbers are :");
        for (i = 1; i <= n; i++)
        {
            Console.Write("{0} ", 2 * i);
            sum += 2 * i;
        }
        Console.Write("\nThe Sum is  {0} terms : {1} \n", n, sum);
    }
}
