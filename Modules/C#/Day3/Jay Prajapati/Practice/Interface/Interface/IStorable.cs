using System;
using System.Collections.Generic;
using System.Text;

namespace Interface
{
    public enum ReturnStatus
    {
        OK,
        Fail
    };
    public interface IStorable
    {
        void Write(object obj);
        String Read();
        ReturnStatus Status { get; set; }
    }
}
