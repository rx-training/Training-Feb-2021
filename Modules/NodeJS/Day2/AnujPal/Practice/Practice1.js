var fs = require('fs');

// 1. Create one txt file name it as person.txt and write in that hello world
fs.writeFile('person.txt', 'hello world', (err) => {
    if (err) {
        console.log("Error Occured");
    }
})

//  2. Append hello India in person.txt.
fs.appendFile('person.txt', '\thello India', (err) => {
    if (err) {
        console.log("Error Occured while appending to the file");
    }
}
)

// 3. Accept your name from command line. And append it to person.txt as "hello" + "name".
const args = process.argv.slice(2)
var total = args[0];
console.log(total)

fs.appendFile('person.txt', `\t Hello ${total}`, (err) => {
    if (err) {
        console.log("Error Occuered");
    }
    else {
        console.log("data appended succesfully");
    }
})


// 4)  Writing and reading of the dummy1.txt
async function f1() {
    fs.writeFile('dummy1.txt', 'sjks sjkdjsk soweo ewoefjs pewiosds', (err) => {
        if (err) {
            console.log("Error Occured");
        }
    })

    await fs.readFile('dummy1.txt', (err, data) => {
        if (err) {
            console.log("Error ocurred during reading file named dummy1");
        }
        else {
            console.log("------------------------Reading the data of the dummy1-------------------------- ");
             console.log(data.toString());
        }
    })

}

f1();

//  4)   Write and read operation on dummy2.txt

async function f2() {
    fs.writeFile('dummy2.txt', 'All the additional arguments are present from the third position going forward.', (err) => {
        if (err) {
            console.log("Error Occured");
        }
    })

    await fs.readFile('dummy2.txt', (err, data) => {
        if (err) {
            console.log("Error ocurred during reading file named dummy2");
        }
        else {
            console.log("------------------------Reading the data of the dummy2-------------------------- ");
             console.log(data.toString());
        }
    })
}

f2();

//  5)  Write your address in one txt file and find out how many consonants are there.

var address;
var consonants=0;
var vowel=0;

fs.readFile('address.txt','utf8',(err,data)=>
{
    if(err)
    {
        console.error(err.message);
    }
    else
    {
        address=data;
        for (const iterator of address) {
            if(iterator=='a' || iterator=='e' || iterator=='i' || iterator=='o' || iterator=='u' || iterator=='A' || iterator=='E' || iterator=='O' || iterator=='I' || iterator=='U')
            {
                vowel++;
            }
            else
            {
                consonants++;
            }
            
        }
        console.log(`Number of Consonants is ${consonants} and Vowel is ${vowel}`);
    }
})


// 6)  Remove person.txt file.

fs.rm('person.txt',(err)=>
{
    if(err)
    {
        console.error(err.message)
    }
    else{
        console.log("File is deleted");
    }
})

//7. Create one folder files and move person.txt in that file.

fs.copyFile('Movable.txt','C:\Users\Anuj\Desktop\test2\NodeTraining\Move\Movable.txt',(err)=>
{
    if(err)
    {
        console.error(err.message);
    }
    else{
        console.log("File is successfully moved");
    }
})
