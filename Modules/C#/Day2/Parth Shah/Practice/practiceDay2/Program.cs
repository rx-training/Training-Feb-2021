using System;
using ClassCalculatorLibrary1;

namespace practiceDay2
{
    public class CalculatorProgram
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello Calculator");
            Console.WriteLine("Enter the FirstNumber");
            double num1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter the SecondNumber");
            double num2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Press 1 for Addition");
            Console.WriteLine("Press 2 for subtraction");
            Console.WriteLine("Press 3 for multiplication");
            Console.WriteLine("Press 4 for division");

            string op =
                (Console.ReadLine());


 
            double result = ClassCalculatorLibrary1.ClassCalculator.(num1, num2, op);
            Console.WriteLine($"Result :- {result}");

        }
            

        }
    
}
