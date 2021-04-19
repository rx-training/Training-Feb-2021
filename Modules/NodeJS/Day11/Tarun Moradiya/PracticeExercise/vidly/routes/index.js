const router = require('express').Router();

const apiRouter =require('./api/index');

router.get('/', (req, res) => {
    res.send('Home Page');
});

router.use('/api', apiRouter);

module.exports = router;
