using System;
using System.Collections.Generic;
using System.Text;

namespace ExceptionTest
{
    public class Tester
    {
        public void Method1()
        {
            Console.WriteLine("Method 1 Begin");
            Method2();
            Console.WriteLine("Method 1 Ends");
        }
        public void Method2()
        {
            Console.WriteLine("Method 2 Begin");
            Console.WriteLine("File Opened...");
            try
            {
                Method3();
            }
            catch (Exception e)
            {
                Console.WriteLine($"Exception Occurs : {e.Message}");

            }
            finally
            {
                Console.WriteLine("File Colsed..");
            }
            Console.WriteLine("Method 2 Ends");
        }
        public void Method3()
        {
            Console.WriteLine("Method 3 Begin");
                var x = 0;
                var y = 12 / x;
            
            
            Console.WriteLine("Method 3 Ends");
        }
    }
}
