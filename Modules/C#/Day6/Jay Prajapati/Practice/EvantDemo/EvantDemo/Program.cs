using System;

namespace EvantDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            var theClock = new Clock();
            var visibleClock = new visibleClock();
            visibleClock.Subscribe(theClock);
            
            theClock.RunClock();
        }
    }
}
