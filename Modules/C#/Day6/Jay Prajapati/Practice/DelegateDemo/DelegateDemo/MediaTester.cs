using System;
using System.Collections.Generic;
using System.Text;

namespace DelegateDemo
{
    class MediaTester
    {
        public delegate int TestMedia();
        public void RunTest(TestMedia testDelegate)
        {
            int result = testDelegate();
            if(result == 0)
            {
                Console.WriteLine("Works");
            }
            else
            {
                Console.WriteLine("Failed");
            }
        }
    }
}
