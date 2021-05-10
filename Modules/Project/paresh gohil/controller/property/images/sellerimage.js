const express = require("express")
const app = express()
const router = express.Router({mergeParams : true})
const authenticate = require("../../authentication/authentication")
const multer = require("multer")
const upload = multer().single('seller')
const {Sellerimage} = require("../../../model/sellerimage")

app.use(express.json())

class sellers{
    static async all(req,res){
        const image = await Sellerimage.find({Property_Type_id : req.params.propertyid})
        res.send(image)
    }
    static async posts(req,res){
        const image = new Sellerimage({
            Property_Type_id : req.body.Property_Type_id,//"6081800d82106d386c2a878f",
            imageid : req.body.imageid,
            Images : {
                data : req.file.buffer,
                contentType : req.file.mimetype
            }        
        })
        // var buffer = req.file.buffer
        // var image1 = fs.writeFileSync("path.png",buffer)
        const result = await image.save()
        res.send(result)
    }
    static async puts(req,res){
        const image = Sellerimage.find({Property_Type_id : req.params.propertyid, imageid : req.params.imageid})
        const image1 = await Sellerimage.updateOne(image,{Images : {
            data : req.file.buffer,
            contentType : req.file.mimetype
        }})
        res.send(image1)
    }
    static async deletes(req,res){
        const image = Sellerimage.find({Property_Type_id : req.params.propertyid, imageid : req.params.imageid})
        const result = await Sellerimage.deleteOne(image)
        res.send(result)
    }
}

router.get("/",sellers.all)

router.post("/",authenticate,upload,sellers.posts)

router.put("/:imageid",authenticate,sellers.puts)

router.delete("/:imageid",authenticate,sellers.deletes)

module.exports = router
