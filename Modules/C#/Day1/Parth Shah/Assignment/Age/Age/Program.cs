
/*Accept Age from user, if age is more than 18 eligible for vote
otherwise it should be displayed as not eligible. Do it with ternary operator*/

using System;

namespace Age
{
    class Program
    {
        static void Main(string[] args)
        {
           
            Console.WriteLine("Enter your age");
            int personAge = Convert.ToInt32(Console.ReadLine());

           var result = personAge >= 18 ? "Eligible for voting" : "Not eligible for voting";

            Console.WriteLine(result);

        }
    }
}



//ternary operator is a short form of if else statement :



