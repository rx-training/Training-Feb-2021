using System;

namespace Grade
{
    class Program
    {
        static void Main(string[] args)
        {
            string[,] name = new string[2, 2];

            int[,] arr = new int[2, 3];

            int[] totmarks = new int[2];

            string[] grade = new string[2];



            for (int i = 0; i < 2; i++)
            {
                Console.Write("Enter Name : ");
                name[i, 0] = Console.ReadLine();


                Console.Write("Enter Address : ");
                name[i, 1] = Console.ReadLine();


                Console.Write("Hindi Marks : ");
                arr[i, 0] = Convert.ToInt32(Console.ReadLine());

                Console.Write(" English Marks : ");
                arr[i, 1] = Convert.ToInt32(Console.ReadLine());

                Console.Write(" Maths Marks : ");
                arr[i, 2] = Convert.ToInt32(Console.ReadLine());

                totmarks[i] = arr[i, 0] + arr[i, 1] + arr[i, 2];

                if (totmarks[i] > 80)
                {
                    grade[i] = "A";
                    //Console.WriteLine("Grade A");
                }
                else if (totmarks[i] > 65)
                {
                    grade[i] = "B";
                    //Console.WriteLine("Grade B");
                }
                else if (totmarks[i] > 50)
                {
                    grade[i] = "C";
                    //Console.WriteLine("Grade C");
                }
                else if (totmarks[i] > 40)
                {
                    grade[i] = "D";
                    //Console.WriteLine("Grade D");
                }
                else
                {
                    grade[i] = "Fail";
                    //Console.WriteLine("Fail");
                }
            }

            for (int i = 0; i < 2; i++)
            {
                Console.Write($"{name[i, 0]}\t");
                Console.Write($"{name[i, 1]}\t");
                Console.Write($"{arr[i, 0]}\t");
                Console.Write($"{arr[i, 1]}\t");
                Console.Write($"{arr[i, 2]}\t");
                Console.Write($"{totmarks[i]}\t");
                Console.Write($"{grade[i]}\n");

            }
        }
    }
}


