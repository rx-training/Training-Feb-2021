const express = require("express");
const doctor = require("./doctors/doctors")
const healthassistant = require("./healthassistant/healthassistants")
const medicine = require("./medicine/medicine")
const patient = require("./patients/patients")
const router = express.Router();
const jwt = require("jsonwebtoken")


/*router middleware*/
router.use("/doctor" , doctor);

router.use("/healthassistant" , healthassistant);

router.use("/medicine", medicine);

router.use("/patient", patient);


//--------login and create token---------------
router.post("/login",(req,res) => {
        //Authentication user
        var user = {
            "username" : req.body.username,
            "password" : req.body.password
        }
        //create token for register user
        const accesstoken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
        res.json({ accessToken : accesstoken})

})

//-----------export router--------------------
module.exports = router
