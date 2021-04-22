const { Paitent, validatePatient: validate } = require('../Models/patients')

//get all patient
exports.getPatient = async (req, res) => {

    if (req.params.id) {

        //get paitent
        const paitent = await Paitent.findById(req.params.id).populate('Doctor','Assistant')

        if (!paitent) res.send('paitent Could not find');

        //send response
        res.send(paitent)


    } else {

        //get all paitent
        const paitents = await Paitent.find()
        res.send(paitents)
    }
}

//addnew paitent
exports.addNewpaitent = async (req,res) =>{
    //validate paitent
    const validatePaitent = validate(req.body)
    
    //error if not validate
    if(!validatePatient) res.status(400).send('Please enter valid values');

    const paitent = new Paitent({
        patientName :req.body.patientName,
        patientEmail:req.body.patientEmail,
        address:req.body.address,
        patientContactno:req.body.patientContactno,
        doctors:[{
            doctor:req.body.doctor
            }
        ],  
        assistants:[req.body.assistants]
    })
    //save database
    await paitent.save()

    //send response
    res.send(paitent)

}

//update paitent

exports.updatePaitent = async (req,res)=>{
    
    //find paitent by id
    const paitent = await Paitent.findById(req.params.id);

    if(!paitent) return res.status(401).send('Paitent with this id not exist')

    //update paitent
        if(req.body.patientName)paitent.patientName =req.body.patientName;
        if(req.body.patientEmail)paitent.patientEmail=req.body.patientEmail;
        if(req.body.address)paitent.address=req.body.address;
        if(req.body.patientContactno)paitent.patientContactno=req.body.patientContactno;
        if(req.body.doctors)paitent.doctors=[req.body.doctors];  
        if(req.body.assistants)paitent.assistants=[req.body.assistants];

        //save in database
        paitent.save()

        //send response
        res.send(paitent)
    }

//delete Paitent
exports.deletepaitent= async (req,res)=>{
    //find and remove Paitent
    const paitent = await Paitent.findByIdAndRemove(req.params.id)

    //if not find paitent
    if(!paitent) return res.status(400).send('Paitent is with this is is not found')

    //send response
    res.send(paitent)
}

