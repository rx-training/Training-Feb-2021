const mongoose = require('mongoose');
const {Plan, validate} = require('../models/plan');
const {Technology} = require('../models/technology');

//get 
exports.getPlan = async function (req, res) {

    const Tech = await Technology.find();

    //check if id given
    if(req.params.id) {
        
        //get data with id
        plan = await Plan.find({tech: req.params.id}).populate('tech', 'name techType');

        //if not in db return
        if(!plan) return res.status(404).send('Plan with given id not found!!!');
        techName = await Technology.findById(req.params.id).select('name')
        //response
        res.header('x-auth-token', global.token).render('pages/plans', {plan, Tech, techName});
    } else {

        //get all data
        const plans = await Plan.find().populate('tech', 'name techType');

        const Tech = await Technology.find();
        //response
        res.header('x-auth-token', global.token).render('pages/plans', {plans, Tech});
    }
}

//add 
exports.addPlan = async function (req, res) {
    
    //validate user input
    const { error } = await validate(req.body);
    
    //if error return
    if(error) return res.status(400).send(error.details[0].message);

    //get techid
    const tech = await Technology.findOne({ name: req.body.tech });

    let techId = tech._id;

    //if not found return
    if(!tech) return res.status(404).send('No such technology !!!');

    //create
    let plan = new Plan({
        name: req.body.name,
        tech: techId,
        whatToLearn: req.body.whatToLearn,
        practiceExercise: req.body.practiceExercise,
        assignments: req.body.assignments,
        references: req.body.references || ''
    });

    //save to db
    plan = await plan.save();

    //response
    res.redirect('back');
}

//update 
exports.updatePlan = async function (req, res) {
    
    //validate user input
    const { error } = await validate(req.body);
    
    //if error return
    if(error) return res.status(400).send(error.details[0].message);
 
    //get techid
    const tech = Technology.findOne({ name: req.body.tech });

    techId = tech._id

    //if not found return
    if(!techId) return res.status(404).send('No such technology !!!');

    //find by id and update
    const plan = await Plan.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        tech: techId,
        whatToLearn: req.body.whatToLearn,
        practiceExercise: req.body.practiceExercise,
        assignments: req.body.assignments,
        references: req.body.references,
    }, {
        new: true
    });

    //if not found return
    if(!plan) return res.status(404).send('Plan with given id not found!!!');
 
    //response
    res.redirect('back');

 }

 //delete
 exports.deletePlan = async function (req, res) {

    //find by id and delete
    const plan = await Plan.findByIdAndRemove(req.params.id);

    //if not found return
    if(!plan) return res.status(404).send('Plan with given id not found!!!');
 
    //response
    res.redirect('back');

 }