const fs = require('fs')
const path = require('path')

//store arguments in array
args = process.argv.slice(2)

//create functions
function add(args) {
    return(+args[0] + +args[1])
}

function sub(args) {
    return(+args[0] - +args[1])
}

function mul(args) {
    return(+args[0] * +args[1])
}

function div(args) {
    return(+args[0] / +args[1])
}

//store result in file
fs.writeFile(path.join(__dirname, 'ans.txt'), 
    `For input ${args[0]} and ${args[1]}\n 
    Addition is: ${add(args)}\n
    Substraction is: ${sub(args)}\n
    Multiplication is: ${mul(args)}\n
    Division is: ${div(args)}`,
    err => {
        if (err) {
            console.log(err)
            return
        }
    })   

//read results from file

fs.readFile(path.join(__dirname, 'ans.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    } else {
        console.log(data)
    }
})