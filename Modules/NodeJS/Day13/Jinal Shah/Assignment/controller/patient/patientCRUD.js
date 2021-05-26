var express = require('express');

const doctor = require('../../models/doctor');
const medicine = require('../../models/medicine');
const patient = require('../../models/patient');

class patientLogic{

    static async all(req,res) 
    {
        const sdata =await patient
            .find()
            .populate('Doctors',doctor)
            .populate('Medicines',medicine)
        res.send(sdata)
    }
    
    static async getbyid(req,res)
    {
        const ID1 = parseInt(req.params.id)
        const sdata =await patient
            .find({ patientID : ID1})
            .populate('Doctors',doctor)
            .populate('Medicines',medicine)
        res.send(sdata)
    }

    static async doctor(req,res)
    {
        const ID1 = parseInt(req.params.id)
        const sdata =await patient
            .find({ patientID : ID1})
            .select('Doctors')
            .populate('Doctors','DoctorName',doctor)
        res.send(sdata)
    }

    static async medicine(req,res)
    {
        const ID1 = parseInt(req.params.id)
        const sdata =await patient
            .find({ patientID : ID1})
            .select('Medicines')
            .populate('Medicines',medicine)
        res.send(sdata)
    }
}

module.exports = patientLogic