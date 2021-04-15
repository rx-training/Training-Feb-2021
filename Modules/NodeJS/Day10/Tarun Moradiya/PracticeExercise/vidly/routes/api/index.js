const router = require('express').Router();

const genresRouter =require('./genres');
const customersRouter =require('./customers');

router.get('/', (req, res) => {
    res.send('api Page');
});

router.use('/genres', genresRouter);

router.use('/cusotomers', customersRouter);

module.exports = router;
