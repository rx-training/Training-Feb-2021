function add(a,b) {
    console.log(a+b);
}

add(20,200);

/*-------------------------------------------------------------*/
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
  })

/*-------------------------------------------------------------*/
const args = process.argv.slice(2);
console.log(args.toString);

/*------------------------------------------------------------*/
const oranges = ['orange', 'orange','apple','banana']
const apples = ['just one apple']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})

/*-----------------------------------------------------------*/
const fs = require('fs');
const content = 'hello world\n'

fs.writeFile('./person.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})

/*-----------------------------------------------------------*/
const content1 = 'hello india'
fs.appendFile('./person.txt',content1,err =>{
    if(err){
        console.error(err)
        return
    }
})

/*-------------------------------------------------------------*/
const args1 =  process.argv.slice(2);
const content2 = 'hello '+args1 +'\n';
fs.appendFile('./person.txt',content2,err1 => {
    if(err1){
        console.error(err1)
        return
    }
})

/*---------------------------------------------------------------*/


function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', function (error, data) {
      if (error) return reject(error);

      console.log(data)

      resolve();
    })
  });
}

async function run() {
  console.log(await readFile('./person1.txt'));
  console.log(await readFile('./person2.txt'));
}

run();

/*------------------------------------------------------------------*/
fs.readFile('./person3.txt','utf8',function (error, data) {

    if(error) return error;
    for(i in data){
        if(data[i] != 'a' & data[i] != 'e'& data[i] != 'i' & data[i] != 'o' & data[i] != 'u')
        { if(data[i] != 'A' & data[i] != 'E'& data[i] != 'I' & data[i] != 'O' & data[i] != 'U')console.count(data[i])}
    }
})

/*------------------------------------------------------------------*/
fs.unlink('./xyz.txt',(err => {
    if(err)return err
}))

/*-----------------------------------------------------------------*/
const path = require('path')
path.resolve('./xyz', 'xyz.txt')