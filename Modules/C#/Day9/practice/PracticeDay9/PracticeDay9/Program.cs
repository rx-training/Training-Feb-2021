using System;
using System.Threading.Tasks;

namespace PracticeDay9
{
    class Program
    {
        static async Task Main(string[] args)
        {
            await PracticeDay9();
        }

        public static async Task PracticeDay9()
        {

            var result = 0;
            var task = Task.Run(() => DoSomethingAsync(4, 4));
            Console.WriteLine("Working");
            //task.wait();
            result = await task;
            Console.WriteLine(result);
            Console.WriteLine("Done");

        }


        private static int DoSomethingAsync(int v1, int v2)
        {

            System.Threading.Thread.Sleep(3000);
            var result = v1 + v2;
            Console.WriteLine(result);
            return result;

        }
    }
       
}

