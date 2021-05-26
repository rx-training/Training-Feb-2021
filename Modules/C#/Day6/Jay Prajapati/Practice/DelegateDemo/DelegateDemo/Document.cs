using System;
using System.Collections.Generic;
using System.Text;

namespace DelegateDemo
{
    class Document
    {
        public string Text { get; set; }
        public delegate int SendDoc();
        public void ReportSedingResult(SendDoc sendingDelegate)
        {
            if(sendingDelegate() == 0)
            {
                Console.WriteLine("Success");
            }
            else
            {
                Console.WriteLine("Unable To Send!");
            }
        }
    }
}
