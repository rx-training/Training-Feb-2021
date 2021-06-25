const fs=require('fs');

const no1=process.argv[2];
const no2=process.argv[3];
const choice=process.argv[4];


addition=(n1,n2)=>{ return n1+n2; }
subtract=(n1,n2)=>{ return n1-n2; }
multipy=(n1,n2)=>{ return n1*n2; }
divide=(n1,n2)=>{ return n1/n2; }

switch(choice){
    case '1':
        console.log(`Addition is=${addition(no1,no2)}`);
        break;
    case '2':
        console.log(`Subtraction is=${subtract(no1,no2)}`);
        break;
    case '3':
        console.log(`Multiplication is=${multipy(no1,no2)}`);
        break;
    case '4':
        console.log(`Division is=${divide(no1,no2)}`);
        break;
    default:       
        console.log(`Invalid choic, enter: firstNo SecondNo choice[1-4]`);
}

let result=`Addition is=${addition(no1,no2)}
ubtraction is=${subtract(no1,no2)}
Multiplication is=${multipy(no1,no2)}
Division is=${divide(no1,no2)}`;

fs.writeFile('./result.txt',result,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("All results are saved into file");
});