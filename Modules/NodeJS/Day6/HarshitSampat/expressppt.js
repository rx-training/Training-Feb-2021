const express = require('express')
const joi = require('Joi');
const app = express()
app.use(express.json())

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));

const books = [
    { title: 'node.js', id: 1 },
    { title: 'MVC', id: 2 },
    { title: '.NET COre', id: 3 }
]

app.get('/', (req, res) => {
    res.send('Welcome to the radix node training');
});

app.get('/api/books', (req, res) => {
    res.send(books);
});

app.get('/api/books/:id', (req, res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));


    if (!book) res.status(404).send('<h2 style="font-family:Malgun Gothic; color :darkred;">Oops cannot find what you are looking for!</h2>');
    res.send(book);
})

/*function validateBook(book){
 const schema={
    title:Joi.string().min(3).required()

 };
 return Joi.validate(book,schema) ;
}*/

app.post('/api/books', (req, res) => {
    console.log(req.body.title);
    //const{error} = validateBook(req.body);
    /* if(error)
     {
         req.status(400).send(error.details[0].message)
         return;
     }*/
    const book = {
        id: books.length + 1,
        title: req.body.title
    };
    books.push(book);
    res.send(book);
})

app.put('/api/books/:id', (req, res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));

    if (!book) res.status(404).send('<h2 style="font-family:Malgun Gothic; color :darkred;">Oops cannot find what you are looking for!</h2>');
    
    book.title = req.body.title
    res.send(book);

})

app.delete('/api/books/:id',(req,res)=>{
    const book = books.find(c => c.id === parseInt(req.params.id));
    if (!book) res.status(404).send('<h2 style="font-family:Malgun Gothic; color :darkred;">Oops cannot find what you are looking for!</h2>');

    const index = books.indexOf(book);
    books.splice(index,1);
    res.send(book);
})