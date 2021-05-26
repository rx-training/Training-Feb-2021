using System;
//Compute add of two number using lambda expression
namespace day6assign2
{
    class Program
    {
        delegate int del(int x, int y);
        static void Main(string[] args)
        {

            //using lambda function 
            del add = (x, y) => x + y;

            Console.WriteLine("Enter 1st number which u want to add: ");
            int num1 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter 2nd number which u wnat to add: ");
            int num2 = Convert.ToInt32(Console.ReadLine());

            int result = add(num1, num2);
            Console.WriteLine("The addition of "+num1+" and "+num2+" is :" +result);

            Console.ReadLine();

        }
    }
}
