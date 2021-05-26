function lexical()
{
    var str = '\uD83D\uDC04\uD83D\uDC04\uD83D\uDC04';
    console.log("Unicode in Laxical Structure : "+str);

    str=(1 + 2).toString()
    console.log("Without Semicolon : "+str)

    str=(1 + 2).toString();
    console.log("With Semicolon : "+str);

    str = 'Hi my name is JavaScript';
    console.log("Without Whitespace : "+str);
    console.log("With Whitespace : "+str.replace(/\s/g, '--'));

    var Str ='hello';
    var str ='HELLO';
    console.log("Case sensitive : " +str+ " & " +Str);

    // Single Line Comment
    /* 
        Double
        Line
        Comment
    */
        var  x = 10;
        {  
          let x = 2;
          console.log("Literal x : "+x);
        }
        console.log("Variable x : "+x);
}


function expression()
{
  
  var a=15;
  var b=5;

  console.log("Assignment Expression of a : " +a);
  console.log("Assignment Expression of b : " +b);

  //Arithmetic Expression
  console.log("Arithmetic Expression a+b: " +(a+b));

  //String Expression
  var s1='Hello ';
  var s2=' World';
  console.log("String Expression s1+s2: " +(s1+s2));

  //logical Expression
  console.log("Logical Expression a>b : " +(a>b));
  console.log("Logical Expression a<b : " +(a<b));
  console.log("Logical Expression a===15 : " +(a===15));
  console.log("Logical Expression b===10 : " +(b===10));
  console.log("Logical Expression a===15 && b===5 : " +(a===15 && b===5));
  console.log("Logical Expression a===15 && b===10 : " +(a===15 || b===10));

  //Array Expression
  var arr=[[1,2,3],[4,5,6],[7,8,9]];

  console.log("Array arr[0]: "+arr[0]);
  console.log("Array arr[1]: "+arr[1]);
  console.log("Array arr[2]: "+arr[2]);


  var rectangle = { height :  { x: 2, y: 2 },
                    width :   { x: 4, y: 5 } };
  console.log("Object : ");
  console.log(rectangle);

  //left-hand-side
  var str = 'Hello, '
  + 'is it me... '
  + 'you\'re looking for?';
  console.log("Left Hand Side Operator : "+str);

  //function definition
  console.log("Function Definition Expression 5*10 : " +(abc(5,10)))
  function abc(a, b) { return a * b }

  const hi = { hello (x,y) 
                  { return x+y }
           };
  console.log("Invocation Expressions 5+10 : "+hi.hello(5,10));
}


function types()
{
  var a=9;
  console.log("Integer Type : " +a);
  a='Zeel Mehta';
  console.log("String Type : "+a);
  a=3.14;
  console.log("Float Type : "+a);

  const a_lit = `javascript`
  console.log("Template Literals : " +a_lit);

  a=true;
  console.log("Boolean : " +a)

  console.log("typeof 1 === 'number' : " +(typeof 1 === 'number'));
  console.log("typeof '1' === 'string' : " +(typeof '1' === 'string'))
  console.log("typeof {name: 'Flavio'} === 'object' : "+(typeof {name: 'Flavio'} === 'object'))
  console.log("typeof [1, 2, 3] === 'object' : "+(typeof [1, 2, 3] === 'object'));
  console.log("typeof true === 'boolean' : "+(typeof true === 'boolean'));
  console.log("typeof undefined === 'undefined' : "+(typeof undefined === 'undefined'));
  console.log("typeof (() => {}) === 'function' : "+(typeof (() => {}) === 'function'));


}


function variables()
{
  var a=1;
  let b=5;
  const c=10;
  console.log("Var : " +a);
  console.log("A variable initialized with var outside of any function is assigned to the global object, has a global scope and is visible everywhere. A variable initialized with var inside a function is assigned to that function, it’s local and is visible only inside it, just like a function parameter.")
  console.log("Let : " +b);
  console.log("Let scope is limited to the block, statement or expression where it’s defined, and all the contained inner blocks.")
  console.log("Const : " +c);
  console.log("Variables declared with var or let can be changed later on in the program, and reassigned. Once a const is initialized, its value can never be changed again, and it can’t be reassigned to a different value.")

}

function functions()
{
  var x=20,y=5;
  add();
  mul(x,y);
  h1(x,y);
  //Function Without Arguments
  function add()
  {
      var a=5,b=5;
      console.log("Function Without Arguments a+b: "+(a+b));
  }
  //Function With Arguments
  function mul(x,y)
  {
    console.log("Function With Arguments x*y: "+(x*y));
  }
  //Function Return value
  function div(x,y)
  {
    return(x/y);
  }
  console.log("Function Return value x/y: "+(div(x,y)));

 
  //Object Methods
  const car = {
    brand: 'Hyundai',
    color: 'Gray',
    start: function() {
      console.log("Object Method : ")
      console.log(car)
    }
  }
  car.start()

   //Nested Function
   function h1(x,y)
   {
     console.log("Nested Function ");
     console.log("Outer Function : x = " +x+ " & y = " +y);
     h2();
     function h2()
     {
      console.log("Inner Function : x = " +(x+5)+ " & y = " +(y+5));
     }
   }
}

function fthis()
{
  const car = {
    maker: 'Hyundai',
    model: 'Sportz Grand i10',
  
    drive() {
      console.log(`Driving a ${this.maker} ${this.model} car!`)
      console.log(`Company : ${this.maker}`)
      console.log(`Modal : ${this.model}`)
    }
  }
  
  car.drive()
}


function farrow()
{
  var hello;

  hello = (val) => "Hello " + val;

console.log(hello("World"));
}

function loops()
{
  //for loop
  console.log("For Loop : ")
  for (let i = 0; i<5; i++) {  
    console.log(i+2);
  }
  //do while loop
  console.log("Do...While Loop : ")
  let j=0;
  do {  
    console.log(j+2);
    j=j+1;
  } while (j < 5)
  //while loop
  console.log("While Loop : ")
  let i = 0
  while (i < 5) {
  console.log(i+2);
  i = i + 1
}
}

function scope()
{
  var name1='Hello'
  function run() {
    var name;
    console.log(`${name}`)
    console.log(`${name1}`)
    name = 'World'
  }
  
  run()
}

function arrayf()
{
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  console.log(matrix);
  console.log(matrix[0]);
  console.log(matrix[1]);
  console.log(matrix[2]);
}

function temp()
{
  const string =
  'first line\n \
    second line \n \
      third line'
  console.log(string);
}

function semi()
{
  str=(1 + 2).toString()
    console.log("Without Semicolon 1+2 : "+str)

   str=(1 + 2).toString();
    console.log("With Semicolon 1+2 : "+str);
}

function strict()
{
  'use strict'

  var str1=(1 + 2).toString();
    console.log("Strict Mode 1+2 : "+str1);
    console.log("In Strict Mode without defining variable : ")
   str=(1 + 2).toString()
    console.log("Strict Mode 1+2: "+str)

  
}


function timer()
{
  console.log("Timer----");
  setTimeout(() => {
    console.log("Timer : 2 seconds")
  }, 2000)
  setTimeout(() => {
    console.log("Timer : 5 seconds")
  }, 5000)
}

function promise()
{
  console.log("Promise : ")
  const wait = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })
  
  wait().then(() => {
    console.log('I promised to run after 1s')
    return wait()
  })
  .then(() => console.log('I promised to run after 2s'))
}

function closure()
{
  function fun(a)  
  {  
    function innerfun(b)
    {  
      return a*b;  
    }  
    return innerfun;  
  }  
var output = fun(4);  
console.log(output(4));  
console.log(" ");  
console.log(output(5));  
}

function event()
{
  const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  bar()
  baz()
}

foo()
}