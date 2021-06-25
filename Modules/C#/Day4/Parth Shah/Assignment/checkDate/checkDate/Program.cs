using System;

namespace checkdate
{
    class InvalidDateException : Exception
    {
        public InvalidDateException(string message) : base(message)
        {

        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var date = DateTime.Now;
            Console.Write("Enter a month: ");
            int month = int.Parse(Console.ReadLine());
            Console.Write("Enter a day: ");
            int day = int.Parse(Console.ReadLine());
            Console.Write("Enter a year: ");
            int year = int.Parse(Console.ReadLine());

            DateTime inputtedDate = new DateTime(year, month, day);

            try
            {
                if (inputtedDate < date)
                {
                    throw new InvalidDateException("Date can't be in the past");

                }
                else
                {
                    Console.WriteLine("Enter Date successfully");
                }
            }
            catch (InvalidDateException ex)
            {

                Console.WriteLine(ex.Message);
            }
            Console.ReadLine();
        }
    }
}
