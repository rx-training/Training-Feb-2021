const Student = require('../Model/student')


//get all student
exports.getStudent = async function(req,res){
    const Students  = await Student.find()
    res.send(Students)
}

//get Student By Id
exports.getStudentById = async function(req,res){
    const StudentId = await Student.findById(req.params.id)
    if(!StudentId)  return res.send('Student Not found')
    res.send(StudentId)
}

//add new student
exports.Addstudent = async function(req,res){
    try{
    let student = new Student({
    
        studentID:req.Body.studentID,
        studentName:req.Body.studentName,
        result:
            {
                English:req.Body.result.English,
                Math:req.Body.result.Math,
                science:req.Body.result.science
            },
        Fees:{
               feesId:req.Body.Fees.feesId,
               studentId:req.Body.Fees.StudentId,
               stundeName:req.Body.Fees.studentName,
               Fees_status:req.Body.Fees.Fees_status
            }   

        });
        student = await student.save()
        res.send(student)
    }
    catch(err){
        console.error(err)
    }
    }

//update student
exports.updateStudent = async function (req,res){
    const student  = await Student.findById(req.params.id)
    
    //check if student is available or not 
    if(!student) return res.send(`Student not found`)

    //update student 
    if(req.body.studentID) student.studentId = req.body.StudentId
    if(req.body.studentName) student.studentName  = req.body.studentName

    //save student to dadatbse
    student = await student.save();
    
    //show updated data
    res.send(student)
}

//delete student
exports.DeleteStudent = async function(req,res){
    //find student to delete
    const studnet = await Student.findAndRemove(req.params.id)

    //check student is availabell or not
    if (!student) return res.send(`Student Not available`)
    
    //show remove student
    res.send(studnent)

}

//get fees
exports.getFees = async function(req,res){

    //find student with id
    const student = await Studet.findById(req.studentId)

    //check if student is available or not
    if(!student) return res.send(`Student is not available`)

    res.send(student.Fees)

}

//update fees
exports.updatefees = async function(req,res){

    //find student with id 
    const student = await Student.findById(req.StudentId)

    //res if student not awailable
    if(!student)return res.send(`Student is not available`)

    if(req.body.feesId) student.Fees.feesId = req.body.feesId;
    if(req.body.StudentId)student.Fees.StudentId = req.body.StudentId;
    if(req.body.studentName)student.Fees.studentName = req.body.studentName;
    if(req.body.Fees_status)student.Fees.Fees_status = req.body.Fees_status;

    //save updated data to database
    student = await student.save()

    //show updated data
    student = res.send(student.Fees)
}

//get result 
exports.getresult = async function(req,res){
    
    //find student with id
    const student = await Student.findById(req.StudentId)

    //response if student not awailable
    if(!student) return res.send(`Student is not available`)

    //show student result
    res.send(student.result)
}

//update result
exports.updateresult = async function(req,res){

    //get student by id
    const student =await Student.findById(req.StudentId)

    //response if student not awailable
    if(!student) return res.send('Student is not available')

    //update 
    if(req.params.English)student.result.English = req.body.English
    if(req.params.Math)student.result.Math = req.body.Math
    if(req.body.params)student.result.Science = req.body.Science
    
    //save updated data to databse
    student  = await student.save()

    //show updated data
    res.send(student)
}

