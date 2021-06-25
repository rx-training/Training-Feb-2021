using System;

namespace Evant
{
    class Program
    {
        static void Main(string[] args)
        {
            var theClock = new Clock();
            var visibleClock = new visibleClock();
            visibleClock.Subscribe(theClock);
            var logger = new Logger();
            logger.Subscribe(theClock);
            theClock.RunClock();
        }
    }
}