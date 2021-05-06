const express = require('express');
const router = express.Router();

function log(req,res){
    console.log("Logging.......")
}

router.get("/",(req,res) => {
    res.send("welcome")
    console.log("wlcm")
})

module.exports = router;