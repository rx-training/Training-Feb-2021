using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace Evant
{
    public class TimeEventArgs : EventArgs
    {
        public int hour { get; set; }
        public int Minute { get; set; }
        public int Second { get; set; }
    }
    class Clock
    {
        private int hour;
        private int minute;
        private int second;

        public delegate void TimeChangeHandler(object clock, TimeEventArgs timeInfo);
        public event TimeChangeHandler TimeChanged;

        public void RunClock()
        {
            while (true)
            {

                Thread.Sleep(100);

                DateTime currentTime = DateTime.Now;
                if (currentTime.Second != this.second)
                {
                    TimeEventArgs timeEventArgs = new TimeEventArgs()
                    {
                        hour = currentTime.Hour,
                        Minute = currentTime.Minute,
                        Second = currentTime.Second
                    };
                    if (TimeChanged != null)
                    {
                        TimeChanged(this, timeEventArgs);
                    }
                    this.second = currentTime.Second;
                    this.minute = currentTime.Minute;
                    this.hour = currentTime.Hour;
                }
            }
        }
    }
}