// function main() {
//     setTimeout(() => console.log('1'), 0);
//     setImmediate(() => console.log('2'));


//     setTimeout(() => console.log('A'), 2000);
//     setImmediate(() => console.log('B'));
//   }
  
//   main();


  // function main2() {
  //   setTimeout(() => console.log('1'), 1000);
  //   process.nextTick(() => console.log('2'));
  //   setImmediate(() => console.log('3'));
  //   process.nextTick(() => console.log('4'));
  // }
  
  // main2();

  // function main3() {
  //   setTimeout(() => console.log('1'), 1000);
  //   process.nextTick(() => console.log('2'));
  //   setImmediate(() => console.log('3'));
  //   process.nextTick(() => setTimeout(() => {
  //     console.log('4');
  //   }, 2000));
  // }
  
  // main3();

  const fs = require('fs');

   function main() {
    setTimeout(() => console.log('1'), 0);
    setImmediate(() => console.log('2'));
 
    fs.readFile('./xyz.txt', (err, buff) => {
     setTimeout(() => {
      console.log('3');
     }, 1000);

     process.nextTick(() => {
      console.log('process.nextTick');
     });

     setImmediate(() => console.log('4'));
    });
 
    setImmediate(() => console.log('5'));

    setTimeout(() => {
     process.on('exit', (code) => {
      console.log(`close callback`);
     });
    }, 1100);
   }

   main();