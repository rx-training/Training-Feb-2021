using System;

namespace day6practice
{
    class Program
    {
        static void Main(string[] args)
        {
            var theclock = new clock();
            var visibleClocks = new visibleClocks();
            visibleClocks.Subscribe(theclock);
            theclock.RunClock();
            var logger = new logger();
            logger.Subscribe(theclock);
            theclock.RunClock();

        }
    }
}
