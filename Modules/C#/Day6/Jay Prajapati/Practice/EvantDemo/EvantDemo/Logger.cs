using System;
using System.Collections.Generic;
using System.Text;

namespace EvantDemo
{
    class Logger
    {
        public void Subscribe(Clock theClock)
        {
            theClock.TimeChanged += delegate (object theClock, TimeEventArgs e)
            {
                Console.WriteLine($"{e.hour}:{e.Minute}:{e.Second}");
            };
        }
        
    }
}
