using System;

namespace StudentGrade
{
    class Program
    {
        static void Main(string[] args)
        {
            //Accept 10 student Name,Address,Hindi,English,Maths Marks ,
            //do the total and compute Grade. Note do it with Array and
            //display the result in grid format


            string[,] StudentsData = new string[10, 2];
            int[,] StudentMarks = new int[10, 3];

            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine("Enter Student Name and Address :");
                for (int j = 0; j < 2; j++)
                {
                    StudentsData[i, j] = Console.ReadLine();
                }
                Console.WriteLine("Enter Marks of Hindi, English, Maths Respectively :");
                for (int k = 0; k < 3; k++)
                {
                    StudentMarks[i, k] = Convert.ToInt32(Console.ReadLine());
                }
            }
            Console.WriteLine("\tName\tAddress\tHindi\tEnglish\tMaths\tTotal\tGrade\n\n");
            for (int i = 0; i < 10; i++)
            {
                int sum = 0;
                char grade;
                for (int j = 0; j < 2; j++)
                {
                    Console.Write($"\t{StudentsData[i, j]}");
                }
                for (int k = 0; k < 3; k++)
                {
                    Console.Write($"\t{StudentMarks[i, k]}");
                    sum = sum + StudentMarks[i, k];
                }
                Console.Write($"\t{sum}");
                if (sum / 3 >= 85)
                {
                    grade = 'A';
                }
                else if (sum / 3 >= 65)
                {
                    grade = 'B';
                }
                else if (sum / 3 >= 45)
                {
                    grade = 'D';
                }
                else if (sum / 3 >= 33)
                {
                    grade = 'E';
                }
                else
                {
                    grade = 'F';
                }
                Console.Write($"\t{grade}");


                Console.WriteLine("\n");
            }

        }
    }
}
