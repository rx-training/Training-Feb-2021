using System;

namespace truth
{
    class Program
    {
        static void Main(string[] args)
        {
            bool myFirstBoolean = 2 + 3 == 5;
            Console.WriteLine(myFirstBoolean);
            bool mySecondBolean = 2 + 3 > 5;
            Console.WriteLine(mySecondBolean.ToString());
            Console.WriteLine("Hello World!");
            bool BothAreTrue = myFirstBoolean && mySecondBolean;
            Console.WriteLine(BothAreTrue);
            bool OneOfTrue = myFirstBoolean || mySecondBolean;
            Console.WriteLine(BothAreTrue);
        }
    }
}
