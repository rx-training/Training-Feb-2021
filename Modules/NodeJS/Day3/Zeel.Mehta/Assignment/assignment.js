const fs = require('fs');
const colors = require('colors');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  
readline.question('Enter Bike No. : ', bike_no => {
    readline.question('Enter Phone No. : ', ph_no => {
        readline.question('Enter Name : ', name => {
            readline.question('Enter Days : ', days => {
                
                const mobi = new Mobike(bike_no,ph_no,name,days);
                readline.close();
            });
        });
    });   
});




class Mobike
{
    constructor(bno,pno,name,days)
    {
        this.bno=bno;
        this.pno=pno;
        this.name=name;
        this.days=days;
        var day = Number(days);
        this.Compute(bno,pno,name,day);
    }
     
    Compute(bno,pno,name,day)
    {
        var rent=0;
        if(day!=0)
        {
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
            
            console.log(colors.yellow("\nRENT : " +rent));
        }
        else
        {
            console.log(colors.red("Error"));
        }
        
    }   
}

