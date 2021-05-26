using System;
using System.Threading;
using System.Threading.Tasks;

namespace AsyncDemo
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var worker = new worker();
            var data = await worker.CollectDataAsync(50);

            foreach (var item in data)
            {
                Console.WriteLine(item);
            }



            await practice1();
        }

        public static async Task practice1()
        {
            var result = 0;
            var task = Task.Run(() => DoSomethingAsync(2, 4));
            Console.WriteLine("working");
            Console.WriteLine(result);
            result = await task;
            Console.WriteLine(result);
            Console.WriteLine("Done");


        }
        private static int DoSomethingAsync(int v1, int v2)
        {
            Thread.Sleep(3000);
            var result = v1 + v2;
            Console.WriteLine(result);
            return result;
        }
    }
}
