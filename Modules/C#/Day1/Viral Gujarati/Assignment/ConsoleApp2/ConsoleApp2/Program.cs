//2.Store your name in one string and find out how many vowel characters are there in your name.

using System;  
public class ConsoleApp2
{
    public static void Main()
    {
        string str;
        int i, len, vowel;

        Console.Write("Enter your Name : ");
        str = Console.ReadLine();

        vowel = 0;
        len = str.Length;

        for (i = 0; i < len; i++)
        {

            if (str[i] == 'a' || 
                str[i] == 'e' ||
                str[i] == 'i' ||
                str[i] == 'o' ||
                str[i] == 'u' ||
                str[i] == 'A' ||
                str[i] == 'E' ||
                str[i] == 'I' ||
                str[i] == 'O' ||
                str[i] == 'U')
            {
                vowel++;
            }
            
        }
        Console.Write("\nThe total number of vowel in your name are  : {0}\n", vowel);
    }
}

