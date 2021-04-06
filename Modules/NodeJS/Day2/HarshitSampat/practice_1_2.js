/*console.log("Hello Harshit");
process.argv.forEach((val,index) => {
    console.log(`${index}:${val}`)
});
const args = require('minimist')(process.argv.slice(2))
args['name']

const path = require('path')

const notes =   'D:\Harshit_RXtrainning_2021\Training-Feb-2021\Modules\NodeJS\Day2\HarshitSampat\person.js'
dirname(notes)
basename(notes)
extname(notes)
*/
const fs =require('fs')
/*fs.readFile('person.txt','utf8',(err,data)=>{
    if(err){
        console.error('file not found' )
        return
    }
    console.log(data)
})  ;*/

const content  = 'Hello Harshit!'
fs.writeFile('person.txt',content,err =>{
    if (err){
        console.log('Somethig Went Wrong try again with newfilename')
        return
    }

})

const contenttoadd = 'Hello India'
fs.appendFile('person.txt',contenttoadd,err =>{
    if(err){
        console.error(err)
        return
    }
})
