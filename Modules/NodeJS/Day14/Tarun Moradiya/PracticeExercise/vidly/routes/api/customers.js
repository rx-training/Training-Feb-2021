const express = require('express');
const router = express.Router();

const {Customer, validateCustomer} = require('../../models/customers')

router.get('/', async (req, res) => {
  const customer = await Customer.find().sort('name');
  res.send(customer);
});

router.post('/', async (req, res) => {
  const { error } = validateCustomer(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let customer = new Customer ({ 
    isGold: req.body.isGold, 
    name: req.body.name,
    phone: req.body.phone
   });

  customer = await customer.save();

  res.send(customer);
});

router.put('/:id', async (req, res) => {
  const { error } = validateCustomer(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const customer = Customer.findByIdAndUpdate(req.params.id, { 
    isGold: req.body.isGold, 
    name: req.body.name,
    phone: req.body.phone
   }, {
    new: true //to get the updated object from db
  })

  if (!customer) return res.status(404).send('The genre with the given ID was not found.');

  res.send(customer);
});

router.delete('/:id', async (req, res) => {
  const customer = await Customer.findByIdAndRemove(req.params.id)
  if (!customer) return res.status(404).send('The genre with the given ID was not found.');

  res.send(customer);
});

router.get('/:id', async (req, res) => {
  const customer = await Customer.findById(req.params.id)
  if (!customer) return res.status(404).send('The genre with the given ID was not found.');
  res.send(customer);
});

module.exports = router;