const router = require('express').Router();

const genresRouter =require('./genres');
const customersRouter =require('./customers');
const moviesRouter =require('./movies');
const rentalsRouter =require('./rentals');
const usersRouter =require('./users');

const auth = require('../../middlewares/auth')

router.get('/', (req, res) => {
    res.send('api Page');
});

router.use('/genres', genresRouter);

router.use('/cusotomers', auth, customersRouter);

router.use('/movies', auth, moviesRouter);

router.use('/rentals', auth, rentalsRouter);

router.use('/users', usersRouter);

module.exports = router;
