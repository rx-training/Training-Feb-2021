//global objects

console.log('Hello!!')

let tOut = setTimeout(() => console.log('timeOut', 1000))
clearTimeout(tOut)

let intr = setInterval(() => console.log('timeOut', 5000))
clearInterval(intr)

//not global

var a = ''

function fn() {
    console.log('var and function is not global they are scoped to the module')
}

console.log(module) //module is also not global object

