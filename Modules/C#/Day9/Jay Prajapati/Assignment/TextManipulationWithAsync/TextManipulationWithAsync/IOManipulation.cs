using System;
using System.Collections.Generic;
using System.Text;
using System.IO;

namespace TextManipulationWithAsync
{
    public class IOManipulation
    {
        public string ReadFile()
        {


            string line;
            
                StreamReader sr = new StreamReader("E:/Practice/CSHarp/Day9/Jay Prajapati/Assignment/SampleText.txt");
                line = sr.ReadLine();
                while (line != null)
                {
                    Console.WriteLine(line);
                    line = sr.ReadLine();
                }
                sr.Close();

            
            return line;
        }
            public void WriteFile(string line)
            {
                try
                {
                 //int index = line.IndexOf(",");
                string newLine = line.Substring(',');
                StreamWriter sw = new StreamWriter("E:/Practice/CSHarp/Day9/Jay Prajapati/Assignment/NewFile.txt");
                    sw.WriteLine(newLine);
                    
                    sw.Close();
                }
                catch (Exception e)
                {
                    Console.WriteLine("Exception : " + e.Message);

                }
                finally
                {
                    Console.WriteLine("Executing finally block");
                }
            }

        

       
    }
}
