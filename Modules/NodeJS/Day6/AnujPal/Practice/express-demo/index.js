const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hello World");
});

const cources = [
    { id: 1, name: "cource1" },
    { id: 2, name: "cource2" },
    { id: 3, name: "cource3" }
]

app.get('/api/user', (req, res) => {
    res.send(cources);
})

// app.get('/api/user',(req,res)=>
// {
//     res.send([1,2,3]);
// })

app.get('/api/user/:ID', (req, res) => {

    const cource = cources.find(c => c.id === parseInt(req.params.ID));
    if (!cource)  return res.status(404).send('Course not found.');

    res.send(cource);


})

app.post('/api/cources', (req, res) => {
    const { error } = validateCource(req.body);
    if (error) {
        res.status(400).send(result.error.details[0].message);
        return
    }

    const cource =
    {
        id: cources.length + 1,
        name: req.body.name
    }
    cources.push(cource);
    res.send(cource);
});

app.put('api/cources/:id', (req, res) => {
    const cource = cources.find(c => c.id === parseInt(req.params.id));
    if (!cource) {
        res.status(404).send('Course not found.');
        return
    }

    const { error } = validateCource(req.body);
    if (error) {
        res.status(400).send(result.error.details[0].message);
        return
    }


    cource.name = req.body.name;
    res.send(cource);
});
// app.get('/api/user/:year/:month',(req,res)=>
// {
//     res.send(req.query);
// })
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
})

function validateCource() {
    const schema =
    {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(cource, schema);
}

app.delete('/api/cources/:id', (req, res) => {
    const cource = cources.find(c => c.id === parseInt(req.params.id));
    if (!cource) {
        res.status(404).send('Course not found.');
        return
    }

    const index=cources.indexOf(cource);
    cources.splice(index,1);
    res.send(cource);

})