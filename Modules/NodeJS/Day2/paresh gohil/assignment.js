const fs = require('fs')

var a,b,c;
var arg  = process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
    if(index==2){
        a = parseInt(val);}
    else if(index==3){
        b = parseInt(val);}
    else if(index==4)
        c = val;
  })

switch (c) {
    case '+' :
        add(a,b)
        break;
    case '-':
        sub(a,b)
        break;
    case '*':
        mul(a,b)
        break;
    case '/':
        div(a,b)
        break;
                        
    default: console.log('hello')
        break;
}

function add(x,y) {
    var d = x+y;
    var d1 = d + ''
    fs.writeFileSync('./person5.txt',d1,(err => {
        if(err) return err;
    }))
    fs.readFile('./person5.txt', 'utf8', function (error, data) {
        if (error) return error;
  
        console.log(data)

      })
}
function sub(x,y) {
    var e = x-y;
    var e1 = e + ''
    fs.writeFile('./person5.txt',e1,err => {
        if(err) return err;
    })
    fs.readFile('./person5.txt', 'utf8', function (error, data) {
        if (error) return error;
  
        console.log(data)

      })
}
function mul(x,y) {
    var f = x*y;
    var f1 = f + '';
    fs.writeFile('./person5.txt',f1,err => {
        if(err) return err;
    })
    fs.readFile('./person5.txt', 'utf8', function (error, data) {
        if (error) return error;
  
        console.log(data)

    })
}
function div(x,y) {
    var g = console.log(x/y);
    var g1 = g + ''
    fs.writeFile('./person5.txt',g1.tostring(),err => {
        if(err) return err;
    })
    fs.readFile('./person5.txt', 'utf8', function (error, data) {
        if (error) return error;
  
        console.log(data)

    })
}