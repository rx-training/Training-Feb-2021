using System;

namespace VowelsName
{
    class Program
    {
        static void Main(string[] args)
        {
            string myStr;
            int i, len, vowel_count;

            Console.WriteLine("Enter the String: ");
            myStr = Console.ReadLine();
            //myStr = "Parth Shah";

            vowel_count = 0;
     

            // find length
            len = myStr.Length;

            for (i = 0; i < len; i++)
            {
                if (myStr[i] == 'a' || myStr[i] == 'e' || myStr[i] == 'i' || myStr[i] == 'o' || myStr[i] == 'u' || myStr[i] == 'A'
                   || myStr[i] == 'E' || myStr[i] == 'I' || myStr[i] == 'O' || myStr[i] == 'U')
                {
                    vowel_count++;
                }
               
            }

            Console.Write("\nVowels in the string: {0}\n", vowel_count);
        }
    }
}
