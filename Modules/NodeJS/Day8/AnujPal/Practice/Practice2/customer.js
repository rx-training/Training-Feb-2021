var express = require('express');
var router = express.Router();
const app = express();
/* GET customers listing without protection. */
router.get("/", (req, res) => {
    res.json("Have a nice day");
});

router.get('/data', function (req, res, next) {
    let customerdata = [
        {
            customerid: 1,
            customername: 'Mahfuz Bappy'
        },
        {
            customerid: 2,
            customername: 'Shamim Uddin'
        },
        {
            customerid: 3,
            customername: 'Ishani Isha'
        }
    ];

    res.json(customerdata);
});;
router.use(function (req, res, next) {
    var token = req.headers['x-access-token'];
    console.log(token);
}



module.exports = router;
