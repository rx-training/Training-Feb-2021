const express = require('express');
const mongoose = require("mongoose");
const healthAssistRouter = express.Router();
healthAssistRouter.use(express())
const healthAssistant = require("../../Models/healthassistant");
const HealthAssistant = mongoose.model('HealthAssistant', healthAssistant)

class demoHealth{
    static async postHelath(req, res) {
        const ha = new HA({
            HAID: req.body.HAID,
            HAName: req.body.HAName,
            DID: req.body.DID,
            PID: req.body.PID

        })
        const a1 = await ha.save();
        res.json(ha);
    }

    static async getAllHa(req, res) {
        const healthasist =HealthAssistant.find()
        await res.json(healthasist);
    }

    static async getHaById(req, res) {
        const healthasist =HealthAssistant.find({HAID:req.params.id})
        await res.json(departments);
    }
}

// API for inserting a new healthAssistant
healthAssistRouter.post("/HA", demoHealth.postHelath)

// API for getting all the healthAssistant
healthAssistRouter.get("/AllHa/",demoHealth.getAllHa)

// API for getting an healthAssistant by it's hid
healthAssistRouter.get("/AllHa/:id",demoHealth.getHaById)



module.exports=healthAssistRouter;