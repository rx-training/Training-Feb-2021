const one = () => {
    return "\t \t  \tExam Started Succesfully \n ";
}

const three = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Exam is finished");
        }, 3000);
    })
}



const two = () => {
    return new Promise((resolve, reject) => {
        const fs = require('fs');
        setTimeout(() => {
            fs.readFile('questions.json', 'utf-8', (err, data) => {
                if (err) {
                    console.error(err.message);
                }
                else {
                    let datatojson = JSON.parse(data);


                    for (const i of datatojson) {
                        console.log((` ${i.QID})  ${i.Question} \n A) ${i.optionA} \n B) ${i.optionB} \n C) ${i.optionC} \n D) ${i.optionD}\n`));
                    }

                
                    resolve("--------------------------------  Last Question Of The Test------------------------------");


                }

            });
        }, 3000);

    })

}


    const EventEmitter = require('events');
    const { resolve } = require('path');
    class MyEmitter extends EventEmitter { }
    const myEmitter = new MyEmitter();
         myEmitter.on('end', async () => {
            let val3 = await three();
            console.log(val3);
    });

    myEmitter.on('start', async () => {
        let val1 = one();
        console.log(val1);
        let val2 = await two();
        console.log(val2);
        myEmitter.emit('end');

    })
    myEmitter.emit('start');