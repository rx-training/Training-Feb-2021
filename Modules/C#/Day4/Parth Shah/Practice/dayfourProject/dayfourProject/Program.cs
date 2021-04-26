using System;

namespace dayfourProject
{
    class MarksException : ApplicationException
    {
        public MarksException()
        {

        }
        public MarksException(string message):base(message)
        {

        }

    public void validate(int number)
    {
        if (number < 0 && number > 100)
        {
            throw new MarksException("Marks shoulb be between 0 to 100");
        }
    }
    }
    class Program
    {
        static void Main(string[] args)
        {

            //example 1 
            int x = 0;
            try
            {
                int y = 100 / x;
            }
            catch (ArithmeticException e)
            {
                Console.WriteLine($"ArithmeticException Handler: {e}");
            }
            catch (Exception e)
            {
                Console.WriteLine($"Generic Exception Handler: {e}");
            }

            //example 2 :
            Person p1 = new Person();
            p1.Name = "John";
            Person p2 = null;

            Console.WriteLine("p1 = p2: {0}", p1.Equals(p2));


            //example 3 of day time:
            // Calculate what day of the week is 36 days from this instant.
            System.DateTime today = System.DateTime.Now;
            System.TimeSpan duration = new System.TimeSpan(36, 0, 0, 0);
            System.DateTime answer = today.Add(duration);
            System.Console.WriteLine("{0:dddd}", answer);

            Console.WriteLine(DateTime.Now);
            Console.WriteLine(DateTime.Today);
            var date = new DateTime();
            Console.WriteLine(date);

            ///practice of session video ;
           Console.WriteLine("Enter your good marks: ");
            int marks = Convert.ToInt32(Console.ReadLine());
            MarksException m = new MarksException();
            try
            {
                m.validate(marks);
            }
            catch (MarksException ex)
            {
                Console.WriteLine(ex.Message);
            }

            try
            {   
              
                Console.WriteLine("Enter Number");
                int id = Convert.ToInt16(Console.ReadLine());
                Console.WriteLine(id);
            }
            catch (FormatException f)
            {
                Console.WriteLine(f.Message);
                Console.WriteLine("Please enter numeric value");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.GetType());
                Console.WriteLine(e.Message);

            }
         
           
            finally
            {
                Console.WriteLine("Always Execute");
            }

            
            
        }
    }
}
