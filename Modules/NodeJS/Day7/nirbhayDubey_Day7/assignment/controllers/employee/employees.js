const fs = require('fs');
const childAssignment = require('./empassignments');
const express = require('express');
const router = express.Router();

router.use('/:id/child/assignments',childAssignment);

class Employees {
    static async getEmpJson() {
        return new Promise(function (resolve, reject) {
            fs.readFile('./employees.json', 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(JSON.parse(data));
            });
        });
    }
    static getAllEmp(req, res) {
        Employees.getEmpJson()
            .then(
                (data) => {
                    res.status(200).json(data);
                },
                (err) => {
                    res.status(204).send(err);
                }
            );
    }
    static getEmp(req, res) {
        Employees.getEmpJson()
            .then(
                (data) => {
                    const empdata = data.find(emp => emp.EmpId == req.params.id);
                    res.json(empdata);
                },
                (err) => {
                    res.status(204).send(err);
                }
            );
    }
    static updateEmp(req, res) {
        let upEmp = req.body;
        let upEmpId = parseInt(upEmp.EmpId);
        if (!isNaN(upEmpId)) {
            Employees.getEmpJson()
                .then(
                    function (data) {
                            for (let i = 0; i < data.length; i++) {
                                if (data[i].EmpId == upEmpId) {
                                    let cemp = data[i];
                                    let dt = new Date;
                                    data[i] = {
                                        "EmpId": upEmpId,
                                        "AddressLine1": (upEmp.AddressLine1 != undefined) ? upEmp.AddressLine1 : cemp.AddressLine1,
                                        "AddressLine2": (upEmp.AddressLine2 != undefined) ? upEmp.AddressLine2 : cemp.AddressLine2,
                                        "AddressLine3": (upEmp.AddressLine3 != undefined) ? upEmp.AddressLine3 : cemp.AddressLine3,
                                        "assignments": (upEmp.assignments != undefined) ? upEmp.assignments : cemp.assignments,
                                        "CitizenshipId": (upEmp.CitizenshipId != undefined) ? upEmp.CitizenshipId : cemp.CitizenshipId,
                                        "City": (upEmp.City != undefined) ? upEmp.City : cemp.City,
                                        "Country": (upEmp.Country != undefined) ? upEmp.Country : cemp.Country,
                                        "DateOfBirth": (upEmp.DateOfBirth != undefined) ? upEmp.DateOfBirth : cemp.DateOfBirth,
                                        "DriversLicenseExpirationDate": (upEmp.DriversLicenseExpirationDate != undefined) ? upEmp.DriversLicenseExpirationDate : cemp.DriversLicenseExpirationDate,
                                        "DriversLicenseId": (upEmp.DriversLicenseId != undefined) ? upEmp.DriversLicenseId : cemp.DriversLicenseId,
                                        "DriversLicenseIssuingCountry": (upEmp.DriversLicenseIssuingCountry != undefined) ? upEmp.DriversLicenseIssuingCountry : cemp.DriversLicenseIssuingCountry,
                                        "FirstName": (upEmp.FirstName != undefined) ? upEmp.FirstName : cemp.FirstName,
                                        "Gender": (upEmp.Gender != undefined) ? upEmp.Gender : cemp.Gender,
                                        "HireDate": (upEmp.HireDate != undefined) ? upEmp.HireDate : cemp.HireDate,
                                        "HomePhoneCountryCode": (upEmp.HomePhoneCountryCode != undefined) ? upEmp.HomePhoneCountryCode : cemp.HomePhoneCountryCode,
                                        "HomePhoneNumber": (upEmp.HomePhoneNumber != undefined) ? upEmp.HomePhoneNumber : cemp.HomePhoneNumber,
                                        "LastName": (upEmp.LastName != undefined) ? upEmp.LastName : cemp.LastName,
                                        "LastUpdateDateTime": `${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`,
                                        "MaritalStatus": (upEmp.MaritalStatus != undefined) ? upEmp.MaritalStatus : cemp.MaritalStatus,
                                        "MiddleName": (upEmp.MiddleName != undefined) ? upEmp.MiddleName : cemp.MiddleName,
                                    };
                                    break;
                                }
                            }
                            fs.writeFile('./employees.json', JSON.stringify(data), (err) => {
                                if (err) {
                                    console.log(err);
                                    return;
                                }
                                res.status(200).send("Data updated successfully");
                            });
                        },
                        function (err) {
                            res.status(204).send(err);
                        }
                );
        }
    }
}

router.get('/', Employees.getAllEmp);
router.get('/:id', Employees.getEmp);
router.put('/', Employees.updateEmp);

module.exports = router;