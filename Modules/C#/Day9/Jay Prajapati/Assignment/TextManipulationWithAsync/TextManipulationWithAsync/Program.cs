using System;
using System.IO;
using System.Threading.Tasks;

namespace TextManipulationWithAsync
{
    class Program
    {
        //Need to read the text file(content with comma like address) and 
        //    write the same text into another folder after
        //    delemiter with comma and after that delete that
        //    old file using async and await. using system.io namespace
        static async Task  Main(string[] args)
        {
            IOManipulation pr = new IOManipulation();

            var result = "";
            var task = Task.Run(()=> pr.ReadFile());
            result = await task;
            File.Delete("E:/Practice/CSHarp/Day9/Jay Prajapati/Assignment/SampleText.txt");
            pr.WriteFile(task.);
            string readResult1 = pr.ReadFile();

            

        }
       
    }
}
