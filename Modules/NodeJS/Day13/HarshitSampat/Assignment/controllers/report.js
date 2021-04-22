const {Paitent, validatePatient:validate} = require('../Models/patients')

//get all paitent
exports.getAllPaitent = async (req,res)=>{

    //get paitent
    const paitent = await Paitent.findById(req.paitentId);
    
    //if not found then error
    if(!paitent) return res.status(401).send('Paitent with given id is not found')
    //if doctor id is provided
    if(req.params.id){

        //get report of a doctor
        report = await paitent.doctors.find(c=>c.doctor == req.params.id)
        //send response
        res.send(report)

    }
    else{
        //get all paitent
        const report = await paitent.doctors
        
        //send response
        res.send(report)
    }

}   


//get medicine list

exports.getmedicine  = async (req,res)=>{

    //get paitent
    const paitent = await Paitent.findById(req.paitentId)   

    //if not found then error
    if(!paitent) return res.send(401).send('Paitent not found');

    //initialize arrary
    let medicines=[]
    paitent.doctors.forEach(element =>  {
        if(element.medicine.morning.length>0) medicines =medicines.concat(element.medicine.morning);
        if(element.medicine.afternoon.length>0) medicines =medicines.concat(element.medicine.afteernoon);
        if(element.medicine.night.length>0) medicines =medicines.concat(element.medicine.morning);
    });
    medicines = medicines.filter((item, i, arr) => arr.indexOf(item) === i);
    res.send(medicines)
}

//get medcine list 
exports.getSummary = async (req,res)=>{
    //get paitent
    const paitent = await Paitent.findById(req.PaitentId)

    //if not paitent
    if(!paitent) return res.status(401).send('Not found ')
    
}