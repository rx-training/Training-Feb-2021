const fs=require('fs');

fs.readFile('./address.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    let consonants=0;
    let vowels=0;
    for(dt of data){
        if(dt=='a' || dt=='e' || dt=='i' || dt=='o' || dt=='u' || dt=='A' || dt=='E' || dt=='I' || dt=='O' || dt=='U'){
            vowels++;
        }else{
            consonants++;
        }
    }
    console.log(`There are ${consonants} consonants and ${vowels} vowels`);
});