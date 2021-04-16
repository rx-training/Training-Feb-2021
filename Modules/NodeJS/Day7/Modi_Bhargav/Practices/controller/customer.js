const { request } = require("express");
const express = require("express");
const router = express.Router();

class Customers {
  static CustomerList(req, res) {
    var List = [{ "customerId": 1, "customerName": "Bhargav" },
    { "customerId": 2, "customerName": "Meet" }]
    // console(req.params.id)
    if (req.params.id) {
      let obj = List.find(p => p.customerId == parseInt(req.params.id))
      return res.status(200).json(obj);
    }
    else {
      return res.json(List);

    }
  }
}
router.get('/', Customers.CustomerList);
router.get('/:id/', Customers.CustomerList);

router.post('/', (req, res) => {

});
module.exports = router;
