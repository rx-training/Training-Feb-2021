using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AsyncDemo
{
    public class worker
    {
        public async Task<IEnumerable<int>> CollectDataAsync(int numberPoints)
        {
            var data = new List<int>();
            int pointsRead = 0;
            while(pointsRead < numberPoints)
            {
                var buffer = await ReadPageAsync();
                for(int i=0; i<10; i++)
                {
                    data.Add(buffer[i]);
                }
                pointsRead += 10;
            }
            return data;
        }

        private Task ReadPageAsync()
        {
            throw new NotImplementedException();
        }
    }
}
