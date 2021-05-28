/*process.argv.forEach((val,index) => {
    console.log(`${index}:${val}`)
});*/

const args = (process.argv.slice(2))
args['name']

const fs =require('fs')
const contenttoadd = '  Hello '+ args
fs.appendFile('person.txt',contenttoadd,err =>{
    if(err){
        console.error(err)
        return
    }
})
console.log("learning Nodes")
console.log("Hello harshit is trying to check nodemon")