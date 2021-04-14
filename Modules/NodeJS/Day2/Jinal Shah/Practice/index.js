 //---------- practice ----------
 
// 1. Create one txt file name it as person.txt and write in that hello world

        var info = require('fs')
        info.readFile("./person.txt",(err,data)=>{
            console.log(data);
            console.log(data.toString());
        })

// 2. Append hello India in person.txt

        const content = 'Hello India!'

        /* info.writeFile('./person.txt', content, err => {
        if (err) {
            console.error(err)
            return
        }
        }) */

        info.writeFile('./person.txt', content, { flag: 'a+' }, err => {})

// 3. Accept your name from command line. And append it to person.txt as “hello “+ “name”.

        const args = "Hello " + process.argv.slice(2)

        info.writeFile('./person.txt', args, { flag: 'a+' }, err => {})


/* 4. Create two txt files, write some dummy text. Read two file content and print it in the console. 
use async and await. */

        var text = '';
        var info = require('fs')
        info.readFile("./file1.txt",(err,data)=>{
            text += data;
        })
        var info = require('fs')
        info.readFile("./file2.txt",(err,data)=>{
            text += "\n" +  data;
            console.log(text);
        })


// 5. Write your address in one txt file and find out how many consonants are there.

        var text1 = [];
        var t2 = '';
        var count = 0;

        var info = require('fs')
        info.readFile("./address.txt",(err,data)=>{
        text1 += data;
        for(i=0; i<data.length;i++)
        {
            if( text1[i] == 'A' || text1[i] == 'E' || text1[i] == 'I' || text1[i] == 'O' || text1[i] == 'U' || text1[i] == ' ' ||
                text1[i] == 'a' || text1[i] == 'e' || text1[i] == 'i' || text1[i] == 'o' || text1[i] == 'u' || text1[i] == ',' || text1[i] == '.')
            { }
            else{
                count += 1;
            }
        }

        console.log(count);
        })


// 6. Remove person.txt file.

        const fs = require('fs')

        const path = './person.txt'

        fs.unlink(path, (err) => {
                    if (err) {
                        console.error(err)
                        return
                    }
                    else{
                    console.log("file removed")
                    }
        })



// 7. Create one folder files and move person.txt in that file.     

        const fs = require('fs')

        const folderName = '/demo/Training-Feb-2021/Modules/NodeJS/Day2/Jinal Shah/Practice/Files'

        try {
            if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName)
            }
        } catch (err) {
            console.error(err)
        }   


        //------------- move file------------


        const fs = require("fs")
        const path = require("path")

        const currentPath = path.join(__dirname, "person.txt")
        const newPath = path.join(__dirname, "Files", "person.txt")

        fs.rename(currentPath, newPath, function(err) {
        if (err) {
            throw err
        } else {
            console.log("Successfully moved the file!")
        }
        })
