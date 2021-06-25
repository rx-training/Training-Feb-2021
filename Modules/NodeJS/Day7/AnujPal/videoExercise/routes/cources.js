const express=require('express');
const router=express.Router();
const cources = [
    { id: 1, name: "cource1" },
    { id: 2, name: "cource2" },
    { id: 3, name: "cource3" }
]

router.get('/', (req, res) => {
    res.send(cources);
})

router.get('/:ID', (req, res) => {

    const cource = cources.find(c => c.id === parseInt(req.params.ID));
    if (!cource)  return res.status(404).send('Course not found.');

    res.send(cource);


})

router.post('/', (req, res) => {
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

router.put('/:id', (req, res) => {
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


router.delete('/:id', (req, res) => {
    const cource = cources.find(c => c.id === parseInt(req.params.id));
    if (!cource) {
        res.status(404).send('Course not found.');
        return
    }

    const index=cources.indexOf(cource);
    cources.splice(index,1);
    res.send(cource);

})

module.exports=router;