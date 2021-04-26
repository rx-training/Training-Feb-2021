using System;

namespace demoGrade
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] ar1 = new int[11, 4];
            string[,] ar2 = new string[11, 3];

            for (int i = 1; i < 11; i++)
            {
                Console.WriteLine("Enter Name of the Student " + i);
                ar2[i, 0] = Console.ReadLine();
                Console.WriteLine("Enter Address of Student");
                ar2[i, 1] = Console.ReadLine();

                Console.WriteLine("Enter Marks of Hindi,English,Maths");
                ar1[i, 0] = Convert.ToInt32(Console.ReadLine());
                ar1[i, 1] = Convert.ToInt32(Console.ReadLine());
                ar1[i, 2] = Convert.ToInt32(Console.ReadLine());
                ar1[i, 3] = ar1[i, 0] + ar1[i, 1] + ar1[i, 2];


            }     //display the student names and marks   

            for (int i = 1; i < 11; i++)
            {
                if (ar1[i, 3] >= 0 && ar1[i, 3] <= 100)
                {
                    if (ar1[i, 3] >= 90) ar2[i, 2] = "A-Grade";
                    else if (ar1[i, 3] >= 80) ar2[i, 2] = "B-Grade";
                    else if (ar1[i, 3] >= 70) ar2[i, 2] = "C-Grade";
                    else if (ar1[i, 3] >= 50) ar2[i, 2] = "D-Grade";
                    else
                        ar2[i, 2] = "Fail";
                }
                else
                    ar2[i, 2] = "Invalid data filled ";
            }

            Console.WriteLine("_______________________________________________________________");



            Console.WriteLine("SNo StudentName Adrr       Hindi   Maths   English   Grade");

            Console.WriteLine("_______________________________________________________________");


            for (int i = 1; i < 11; i++)
            {

                Console.Write("{0, -5}", i);

                Console.Write("{0, -10}", ar2[i, 0]);

                Console.Write("{0, -15}", ar2[i, 1]);

                Console.Write("{0, -7}", ar1[i, 0]);

                Console.Write("{0, -7}", ar1[i, 1]);

                Console.Write("{0, -7}", ar1[i, 2]);

                Console.Write("{0, -7}", ar2[i, 2]);



                Console.WriteLine();

                Console.WriteLine("_______________________________________________________________");

            }

            Console.WriteLine("_______________________________________________________________");


        }
    }
}
