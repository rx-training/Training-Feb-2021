const router = require('express').Router();

//routes
router.get('/', (req, res) => {
    res.send('Welcome!!!');
})

//exports
module.exports = router;