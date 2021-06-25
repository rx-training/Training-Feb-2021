const fs = require('fs')
fs.readFile('address.txt','utf8',function(error,data){
    if(error) return error;

    for (i in data){
        if(data[i]!=='0'&data[i]!=='1'&data[i]!=='2'&data[i]!=='3'&data[i]!=='4'&data[i]!=='5'&data[i]!=='6'&data[i]!=='7'&data[i]!=='8'&data[i]!=='9'){
        if (data[i]!='a' & data[i]!='e'& data[i]!='i' & data[i]!='o' & data[i]!='u')
        {
            if (data[i]!='A' & data[i]!='E'& data[i]!='I' & data[i]!='O' & data[i]!='U')
            {
                console.count(data[i])
            }
        }
    } 
    }
    })

