const {Doctor, validateDoctor:validate} = require('../Models/doctors')


//get all doctors
exports.getdoctors = async(req,res) =>{
    try{
    //get all doctor    
    const doctor = await Doctor.find()
    res.send(doctor)
    }
    catch(err){
        console.error('Something went wrong',err)
    }
}

exports.getDoctorById = async (req,res)=>{
    try{
        //find doctor with id
        const doctor = await Doctor.findById(req.params.id).populate('Department')
        if(!doctor) res.status(401).send('Doctor not found with this id')

        //send response
        res.send(doctor)

    }
    catch(err){
        console.error('Something went wrong')
    }
}

exports.addNewDoctor = async (req,res)=>{
   //validate user input
    const validatedoctor = validate(req.body)
    
    //response if not found 
    if(!validatedoctor)res.status(400).send(validatedoctor.error)   

    //create new doctor
    const doctor = new Doctor({
        doctorName: req.body.doctorName,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        Department: req.body.Department
    })
    //save new data to databse
    await doctor.save()

    //send response
    res.send(doctor);
}

exports.upadteDoctor = async (req,res)=>{
    try{
    //get doctor
    const doctor = await Doctor.findById(req.params.id)

    //error then response
    if(!doctor)return res.status(401).send('Could not find doctor with this id')

    //update doctor
    if(req.body.doctorName)doctor.doctorName=req.body.doctorName;
    if(req.body.email)doctor.email=req.body.email;
    if(req.body.phoneNo)doctor.phoneNo=req.body.phoneNo;
    if(req.body.Department)doctor.Department=req.body.Department;

    //save to database
    doctor.save();
    
    //send response
    res.send(doctor);
    }
    catch(err){
      res.send(err,'something went wrong')
    }
}


//delete doctor
exports.deleteDoctor=async (req,res) =>{
    //get doctor by id and remove it
    const doctor = await Doctor.findByIdAndRemove(req.params.id);

    //if not doctotr then error
    if(!doctor)return res.status(401).send('Doctor is not found')

    //send response
    res.send(doctor)
}