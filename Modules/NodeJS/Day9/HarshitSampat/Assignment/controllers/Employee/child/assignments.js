const router = require('express').Router()
const employees = require('../empDetails.json')

const fs = require('fs')

class assignment{
    //get all assignment
    static geAllAssignment(req,res,next){
        const employee =req.employee
        res.send(employee.assignment)

    }
    //add new assignment

    static  addNewAssignment(req,res){
        const id = req.Emp_Id
        //search employee by it's id
        const existEmp = employees.find(c =>c.Emp_Id == id)
        console.log(existEmp)

        const newAssignment = { 
                    Assignment_id : existEmp.assignment.length+1,   
                    AssignmentCaegory: req.body.AssignmentCaegory,
                    AssignmentName: req.body.AssignmentName,
                    AssignmentProjectEndDate:req.body.AssignmentProjectEndDate, 
                    AssignmentStats:req.body.AssignmentStats,
                    endTime: req.body.endTime,
                    JobId: req.body.JobId,
                    LastUpdated:req.body.LastUpdated,
                    Location: req.body.LastUpdated,
                    ManagerAssistant:req.body.ManagerAssistant,
                    ManagerID: req.body.ManagerID
        }
        existEmp.assignment.push(newAssignment)
        fs.appendFile('./empDetails.json',JSON.stringify(existEmp.assignment),(err)=>{
            if(err) return console.error('Data not saved')
        })
        console.log(employees)
        res.send(existEmp)
    };

    //update Existing assignment
    static updateAssignment(req,res){
        const Emp_Id = req.Emp_Id
        const id=req.params.id
    
        //search id in 
        const existEmp = employees.find(c =>c.Emp_Id === Emp_Id)
    
        const assignment = existEmp.assignment.find(c=>c.Assignment_id===id)
                    if(!assignment)return res.send(`assignment with ${id} not found`)
                    if(req.body.AssignmentCaegory) assignment.AssignmentCaegory = req.body.AssignmentCaegory
                    if(req.body.AssignmentName)assignment.AssignmentName= req.body.AssignmentName
                    if(req.body.AssignmentProjectEndDate)assignment.AssignmentProjectEndDate=req.body.AssignmentProjectEndDate 
                    if(req.body.AssignmentStats)assignment.AssignmentStats=req.body.AssignmentStats
                    if(req.body.endTime)assignment.endTime= req.body.endTime
                    if(req.body.JobId)assignment.JobId= req.body.JobId
                    if(req.body.LastUpdated)assignment.LastUpdated=req.body.LastUpdated
                    if(req.body.Location)assignment.Location= req.body.LastUpdated
                    if(req.body.ManagerAssistant)assignment.ManagerAssistant=req.body.ManagerAssistant
                    if(req.body.ManagerID)assignment.ManagerID= req.body.ManagerID
    
                    fs.writeFile('./emDetails.json',JSON.stringify(employees),(err)=>{
                        if(err) return console.error('DAta not saved')
                    })
                    res.send(existEmp)
    };
    //delete assignment
    static deleteAssignment(req,res){
        const Emp_Id = req.params.Emp_Id
    
        const existEmp = emmployees.find(c=>c.Emp_Id === Emp_Id)
        const id =req.params.id
        const assignment = existEmp.assignment.find(c=>c.Assignment_id=id)

        if(!assignment) return res.send('Id not found ')

        const index = existEmp.assignment.indexOf(assignment)

        existEmp.assignment.splice(index,1)

        fs.writeFile('./empDetails.json',JSON.stringify(employess),(err)=>{
            if(err) return console.error('canNot delete')
        })
        res.send(employees)

        };
}

//route to get all assignment
router.get('/',assignment.geAllAssignment)
    
//route to create new assignments
router.post('/',assignment.addNewAssignment)

//update assignment
router.put('./:id',assignment.updateAssignment)

//delete Assignement
router.delete(':/id',assignment.deleteAssignment)

module.exports=router
