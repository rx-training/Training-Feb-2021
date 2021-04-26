using System;
using System.Collections.Generic;
using System.Text;

namespace Evant
{
    class Logger
    {
        public void Subscribe(Clock theClock)
        {
            theClock.TimeChanged += new Clock.TimeChangeHandler(NewTime);
        }
        public void NewTime(object theClock, TimeEventArgs e)
        {
            Console.WriteLine($"{e.hour}:{e.Minute}:{e.Second}");

        }
    }
}