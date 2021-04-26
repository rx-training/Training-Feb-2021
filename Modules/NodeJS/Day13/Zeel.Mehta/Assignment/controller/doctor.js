const express=require("express");
const router=express.Router({mergeParams:true});
router.use(express.json())

//  const childr=require("./Child/result");
//  const childf=require("./Child/fees");

 const doctordata=require('../mongodb/doctor')



class Doctor
{
    static async allData(req,res )
    {
        const ddata=await doctordata.find()
        res.send(ddata);
       
    }
    static async getData(req,res )
    {
        const dID=parseInt(req.params.id)
        const ddata=await doctordata.find({dId : dID})
        if(ddata.length == 0)
            res.status(404).send("Record not found..")
        res.send(ddata);
       
    }
    static async getpData(req,res )
    {
        const dID=parseInt(req.params.id)
        const ddata=await doctordata.find({dId : dID})
      
        if(ddata.length == 0)
            res.status(404).send("Record not found..")
        res.send(ddata);
       
    }
    static async postData(req,res )
    {
        const newdata = req.body
        const data=new doctordata(newdata)
        const result=await data.save()
        res.send(result)
       
    }
    static async deleteData(req,res )
    {
        const dID = parseInt(req.params.id)
        const data = await doctordata.find({dId : dID})
        const remove=await doctordata.remove({dId : dID})
       res.send(data)
    }
}
router.get("/", Doctor.allData);
router.get("/:id", Doctor.getData);
router.get("/patient/:id", Doctor.getpData);
router.post("/", Doctor.postData);
router.delete("/:id", Doctor.deleteData);

// router.use("/:id/result",childr);
// router.use("/:id/fees",childf);

module.exports=router;