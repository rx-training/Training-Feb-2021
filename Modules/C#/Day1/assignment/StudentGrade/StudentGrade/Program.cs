using System;

namespace StudentGrade
{
    class Program
    {
        static void Main(string[] args)
        {
            int[][] arr = new int[10][];
            int temp = 0;
            string grade;

            bool endApp = false;
            while (!endApp)
            {

                string name, address;
                int hindi, english, maths, total;

                Console.Write("Enter Name : ");
                name = Console.ReadLine();

                Console.Write("Enter Address : ");
                address = Console.ReadLine();

                Console.Write("Enter Hindi Marks : ");
                hindi = Convert.ToInt32(Console.ReadLine());

                Console.Write("Enter English Marks : ");
                english = Convert.ToInt32(Console.ReadLine());

                Console.Write("Enter Maths Marks : ");
                maths = Convert.ToInt32(Console.ReadLine());
                arr[temp] = new int[] { hindi, english, maths };

                total = (hindi + english + maths) / 3;
                Console.WriteLine("Total : " + total);

                if (total > 90)
                {
                    grade = "A+";
                    Console.WriteLine("Grade A+");
                }
                else if (total > 80 && total < 90)
                {
                    grade = "A";
                    Console.WriteLine("Grade A");
                }
                else if (total > 70 && total < 80)
                {
                    grade = "B+";
                    Console.WriteLine("Grade B+");
                }
                else if (total > 60 && total < 70)
                {
                    grade = "B";
                    Console.WriteLine("Grade B");
                }
                else if (total > 50 && total < 60)
                {
                    grade = "c";
                    Console.WriteLine("Grade C");
                }
                else if (total > 40 && total < 50)
                {
                    grade = "D";
                    Console.WriteLine("Grade D");
                }
                else if (total > 35 && total < 40)
                {
                    grade = "E";
                    Console.WriteLine("Grade E");
                }
                else
                {
                    grade = "Fail";
                    Console.WriteLine("Fail");
                }

                Console.WriteLine("-------------------------------Result---------------------------------------");
                Console.WriteLine("|   Name   |  Address  |  Hindi  |  English  |  Maths  |  Total  |  Grade  |");
                Console.WriteLine("|  " + name + "  |  " + address + "  |   " + arr[temp][0] + "    |    " + arr[temp][1] + "    |    " + arr[temp][2] + "    |    " + total + "    |    " + grade + "    |");

                temp++;

                Console.Write("Press 'e' to Exit and Enter to close the app, or press any other key and Enter to continue: ");
                if (Console.ReadLine() == "e") endApp = true;
            }

        }

    }
}
