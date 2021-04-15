using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace day6practice
{
    class logger
    {
        public void Subscribe(clock theclock)
        {
            theclock.TimeChanged += new clock.TimeChangeHandler(NewTime);
        }
        public void NewTime(object theclock, TimeEventArgs e)
        {
            Console.WriteLine(" logging event at {0}:{1}:{2}",
                e.Hour.ToString(),
                e.Minute.ToString(),
                e.Second.ToString());
        }
    }
}
