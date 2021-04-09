using System;

namespace vowelsInName
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter Your Name :");
            string Name = Console.ReadLine().ToLower();
            int count = 0;
            for(int i= 0; i < Name.Length; i++)
            {
                
                if(Name[i]== 'a' || Name[i] == 'e' || Name[i] == 'i' || Name[i] == 'o' || Name[i] == 'u')
                {
                    count = count + 1;
                }
            }
            Console.WriteLine($"Number of Vowels in the Name {Name} is {count}");
        }
    }
}
