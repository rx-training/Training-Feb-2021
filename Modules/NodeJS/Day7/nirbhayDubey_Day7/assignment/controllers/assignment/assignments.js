const fs = require('fs');
const express = require('express');
const router = express.Router();

class Assignments {
    static async getAssignmentJson() {
        return new Promise(function (resolve, reject) {
            fs.readFile('./assignments.json', 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(JSON.parse(data));
            });
        });
    }
    static getAllAssignments(req, res) {
        Assignments.getAssignmentJson()
            .then(
                (data) => {
                    res.status(200).json(data);
                },
                (err) => {
                    res.status(204).send(err);
                }
            );
    }
    static getAssignment(req, res) {
        Assignments.getAssignmentJson()
            .then(
                (data) => {
                    const assignData = data.find(assign => assign.AssignmentId == req.params.id);
                    res.json(assignData);
                },
                (err) => {
                    res.status(204).send(err);
                }
            );
    }
    static updateAssignment(req, res) {
        let upAssign = req.body;
        let upAssignmentId = parseInt(upAssign.AssignmentId);
        if (!isNaN(upAssignmentId)) {
            Assignments.getAssignmentJson()
                .then(
                    function (data) {
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
                            fs.writeFile('./assignments.json', JSON.stringify(data), (err) => {
                                if (err) {
                                    console.log(err);
                                    return;
                                }
                                res.status(200).send("Assignment updated successfully");
                            });
                        },
                        function (err) {
                            res.status(204).send(err);
                        }
                );
        }
    }
}

router.get('/',Assignments.getAllAssignments);
router.get('/:id', Assignments.getAssignment);
router.put('/', Assignments.updateAssignment);

module.exports = router;