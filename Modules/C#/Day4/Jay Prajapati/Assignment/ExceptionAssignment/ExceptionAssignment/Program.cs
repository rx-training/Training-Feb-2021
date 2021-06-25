using System;

namespace ExceptionAssignment
{
    class Program
    {

        static void Main(string[] args)
        {
            Student st = new Student();
            Console.Write("Enter Your Name : ");
            st.getName = Console.ReadLine();
            Console.Write($"Enter Your Age Mr/Miss/Ms. {st.getName} : ");
            st.getAge = Convert.ToInt32(Console.ReadLine());
            Console.Write($"Enter Date : ");
            st.GetDate = Convert.ToDateTime(Console.ReadLine());
        }
    }
}
