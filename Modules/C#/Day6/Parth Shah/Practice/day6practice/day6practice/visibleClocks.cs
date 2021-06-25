using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading;

namespace day6practice
{
    class visibleClocks
    {
        public void Subscribe(clock theclock)
        {
            theclock.TimeChanged += new clock.TimeChangeHandler(NewTime);
        }

        public void NewTime(object theclock,TimeEventArgs e)
        {
            Console.WriteLine("{0}:{1}:{2}",
                e.Hour.ToString(),
                e.Minute.ToString(),
                e.Second.ToString());
        }
    }
}
