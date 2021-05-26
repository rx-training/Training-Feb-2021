var express = require('express')
var router = express.Router()
const verifyToken = require('./varifyToken')
/*Get Customers Listing without protection
*/

router.get('/data',verifyToken,function(req,res,next){
    let Customerdata = [
        {
            customerid:1,
            customername:'Mahfuz Bappy'
        },
        {
            customerid:2,
            customername:'Shamim Uddin'
        },

        {
             customerid: 3,
             customername: 'Ishani Isha'
   
        }
    ];
    res.json(Customerdata)
})
module.exports =router