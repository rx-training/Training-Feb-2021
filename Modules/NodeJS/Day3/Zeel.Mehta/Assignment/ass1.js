const fs = require('fs');
const colors = require('colors');
           
class Mobike
{
         
    Compute(bno,pno,mname,day)
    {
        var rent=0;
       
            for(let i=1; i<=day; i++)
            {
                if(i<=5)
                {
                    rent=rent+500;
                }
                if(i>=6 && i<=10)
                {
                    rent=rent+400;
                }
                if(i>=11)
                {
                    rent=rent+200;
                }
            }
            console.log(colors.yellow("Bike No. : " +bno));
            console.log(colors.yellow("Phone No. : " +pno));
            console.log(colors.yellow("Name : " +mname));
            console.log(colors.yellow("Days : " +day));
            console.log(colors.yellow("\nRENT : " +rent));
    } 
}

module.exports = Mobike;


