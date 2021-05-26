using System;
using System.Collections.Generic;
using System.Text;

namespace day6practice
{
    public class TimeEventArgs : EventArgs
    {
        public int Hour { get; set; }
        public int Minute { get; set; }

        public int Second { get; set; }

    }
}