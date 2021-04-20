const fs = require('fs');
const express = require('express');
const varifyToken=require('../../authentication/varifyAuth');
const router = express.Router({mergeParams:true});

class Empassignments{
    static async getEmpJson() {
        return new Promise(function (resolve, reject) {
            fs.readFile('./models/employees.json', 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(JSON.parse(data));
            });
        });
    }
    static async getAssignmentJson() {
        return new Promise(function (resolve, reject) {
            fs.readFile('./models/assignments.json', 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(JSON.parse(data));
            });
        });
    }
    static async getEmpAssignmentJson(assignIds) {
        return new Promise(function (resolve, reject) {
            fs.readFile('./models/assignments.json', 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                let allassigns=JSON.parse(data);
                let assignList=[];
                assignIds.forEach(id => {
                    for(let i=0;i<allassigns.length;i++){
                        if(id==allassigns[i].AssignmentId){
                            assignList.push(allassigns[i]);
                            break;
                        }
                    }
                });
                resolve(assignList);
            });
        });
    }
    static getEmpAllAssignments(req,res) {
        Empassignments.getEmpJson()
        .then(
            (data)=>{
                let emp=data.find(emp=>emp.EmpId == parseInt(req.params.id));
                Empassignments.getEmpAssignmentJson(emp.assignments)
                .then(
                    (assignments)=>{
                        res.status(200).json(assignments);
                    },
                    (err)=>{
                        res.status(204).send(err);
                    }
                );
            },
            (err)=>{
                res.status(204).send(err);
            }
        );
    }
    static getEmpAssignment(req,res) {
        Empassignments.getEmpJson()
        .then(
            (data)=>{
                let emp=data.find(emp=>emp.EmpId == parseInt(req.params.id));
                Empassignments.getEmpAssignmentJson(emp.assignments)
                .then(
                    (assignments)=>{
                        let assign=assignments.find(assign=>assign.AssignmentId == parseInt(req.params.aid));
                        res.status(200).json(assign);
                    },
                    (err)=>{
                        res.status(204).send(err);
                    }
                );
            },
            (err)=>{
                res.status(204).send(err);
            }
        );
    }
    static updateEmpAssignment(req,res){
        Empassignments.getEmpJson()
        .then(
            (data)=>{
                let emp=data.find(emp=>emp.EmpId == parseInt(req.params.id));
                Empassignments.getAssignmentJson()
                .then(
                    (data)=>{
                        let upAssign=req.body;
                        let upAssignmentId=emp.assignments.find(e=>e == parseInt(req.params.aid));
                        if(upAssignmentId!=undefined){
                            for (let i = 0; i < data.length; i++) {
                                if (data[i].AssignmentId == upAssignmentId) {
                                    let cassign = data[i];
                                    data[i] = {
                                        "AssignmentCategory": (upAssign.AssignmentCategory != undefined) ? upAssign.AssignmentCategory : cassign.AssignmentCategory,
                                        "AssignmentId": upAssignmentId,
                                        "AssignmentName": (upAssign.AssignmentName != undefined) ? upAssign.AssignmentName : cassign.AssignmentName,
                                        "AssignmentProjectedEndDate": (upAssign.AssignmentProjectedEndDate != undefined) ? upAssign.AssignmentProjectedEndDate : cassign.AssignmentProjectedEndDate,
                                        "AssignmentStatus": (upAssign.AssignmentStatus != undefined) ? upAssign.AssignmentStatus : cassign.AssignmentStatus,
                                        "CreationDate": (upAssign.CreationDate != undefined) ? upAssign.CreationDate : cassign.CreationDate,
                                        "DepartmentId": (upAssign.DepartmentId != undefined) ? parseInt(upAssign.DepartmentId): parseInt(cassign.DepartmentId),
                                        "FullPartTime": (upAssign.FullPartTime != undefined) ? upAssign.FullPartTime : cassign.FullPartTime,
                                        "LastUpdateDate": (upAssign.LastUpdateDate != undefined) ? upAssign.LastUpdateDate : cassign.LastUpdateDate,
                                        "links": (upAssign.links != undefined) ? upAssign.links : cassign.links,
                                        "LocationId": (upAssign.LocationId != undefined) ? upAssign.LocationId : cassign.LocationId,
                                        "ManagerId": (upAssign.ManagerId != undefined) ? upAssign.ManagerId : cassign.ManagerId,
                                    };
                                    break;
                                }
                            }
                            fs.writeFile('./models/assignments.json', JSON.stringify(data), (err) => {
                                if (err) {
                                    console.log(err);
                                    return;
                                }
                                res.status(200).send("Employee Assignment updated successfully");
                            });
                        }
                    },
                    (err)=>{
                        res.status(204).send(err);
                    }
                );
            },
            (err)=>{
                res.status(204).send(err);
            }
        );
    }
}

router.get('/',varifyToken,Empassignments.getEmpAllAssignments);
router.get('/:aid',varifyToken,Empassignments.getEmpAssignment);
router.put('/:aid',varifyToken,Empassignments.updateEmpAssignment);

module.exports=router;