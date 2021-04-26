//  1)

function main() {
    setTimeout(() => console.log('1'), 0);
    setImmediate(() => console.log('2'));
}
main();


//  2)
const fs = require('fs');
function main() {
    fs.readFile('./xyz.txt', () => {
        setTimeout(() => console.log('1'), 0);
        setImmediate(() => console.log('2'));
    });
}
main();


//    3)

function main() {
    setTimeout(() => console.log('1'), 50);
    process.nextTick(() => console.log('2'));
    setImmediate(() => console.log('3'));
    process.nextTick(() => console.log('4'));

    main();


    //   4)
    function main() {
        setTimeout(() => console.log('1'), 50);
        process.nextTick(() => console.log('2'));
        setImmediate(() => console.log('3'));
        process.nextTick(() => setTimeout(() => {
            console.log('4');
        }, 1000));
    }

    main();