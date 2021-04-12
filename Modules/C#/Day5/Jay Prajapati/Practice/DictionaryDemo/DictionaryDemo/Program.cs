using System;
using System.Collections.Generic;

namespace DictionaryDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, string> Capitals = new Dictionary<string, string>();
            Capitals.Add("Alabama", "Montgomery");
            Capitals.Add("Alaska", "Juneau");
            Capitals.Add("Arizona", "Phoenix");
            Capitals.Add("Massachusetts", "Boston");
            Capitals.Add("Wyoming", "Cheyene");
            string capitalOfMass = Capitals["Massachusetts"];
            Console.WriteLine($"The capital of Massachusetts is {capitalOfMass}");

            var getstate = State.GetStates();
            string cpitalOfGujarat = getstate["Gujarat"].Capital;
            Console.WriteLine($"Capital OF Gujarat : {cpitalOfGujarat}");
            var cp = getstate["Gujarat"];
            Console.WriteLine($"Capital : {cp.Capital}, Population : {cp.Population}, Size : {cp.Size}");


            Dictionary<string, decimal> Products = new Dictionary<string, decimal>();
            Products.Add("Product1", 12000);
            Products.Add("Product2", 20000);
            Products.Add("Product3", 3000);
            Products.Add("Product4", 2000);

            Console.WriteLine(Products["Product1"]);

        }
    }
}
