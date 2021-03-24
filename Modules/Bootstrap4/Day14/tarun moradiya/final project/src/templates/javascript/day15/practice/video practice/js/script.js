//while and do while

let i = 0;
while (i < 5 ) {
    console.log(i++);
}

i = 0;
do {
    console.log(i++);
} while (i < 5)

// for 

for (let j = 0; j<5 ; j++) {
    for (let k = 0; k < j; k++ ) {
        console.log(j);
    }
}

// for in

let listItem = {
    product: 'my product',
    price: 100,
    srNo: 35
};

for (field in listItem) {
    console.log(listItem[field]);
}

// for of

let arrayItem = [1, 2, 3, 4, 6, "tarun", "moradiya"];

for (field of arrayItem) {
    console.log(field);
}

//hoisting

console.log(hoistingVar1);
let hoistingVar1 = 1;

let total = calc1 + calc2;
let calc1 = 3, calc2 =4;
console.log(total);

hoistinFunc();

function hoistinFunc() {
    console.log("hoisting function example")
}

hoistinFuncVar();

let hoistinFuncVar = function() {
    console.log('function var')
}