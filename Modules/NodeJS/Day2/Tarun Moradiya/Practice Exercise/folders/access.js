const fs = require('fs');

fs.access('../folders', (err) => {
    if (err){
        console.log('Folder Does Not Exist')
        console.log(err)
    }
    else{
        console.log('Folder Exist')
    }
})

fs.access('new', (err) => {
    if (err){
        console.log('Folder Does Not Exist')
        console.log(err)
    }
    else{
        console.log('Folder Exist')
    }
})

