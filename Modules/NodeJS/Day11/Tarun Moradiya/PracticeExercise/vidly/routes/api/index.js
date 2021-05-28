const router = require('express').Router();

const genresRouter =require('./genres');
const customersRouter =require('./customers');
const moviesRouter =require('./movies');
const rentalsRouter =require('./rentals');

router.get('/', (req, res) => {
    res.send('api Page');
});

router.use('/genres', genresRouter);

router.use('/cusotomers', customersRouter);

router.use('/movies', moviesRouter);

router.use('/rentals', rentalsRouter);

module.exports = router;
