using System;

namespace VowelChar
{
    class Program
    {
        static void Main(string[] args)
        {
            int total = 0;

            Console.WriteLine("Enter a Sentence");
            string sentence = Console.ReadLine().ToLower();

            for (int i = 0; i < sentence.Length; i++)
            {
                if (sentence.Contains("a") || sentence.Contains("e") || sentence.Contains("i") || sentence.Contains("o") || sentence.Contains("u"))
                {
                    total++;
                }
            }
            Console.WriteLine("Your total number of vowels is: {0}", total);

            Console.ReadLine();
        }
    }
}
