var express = require('express')
var router = express.Router();

const result = require('./result/result')
const fees = require('./fees/fees')

const student = require('../../mongoDB/stud')

class A{

    static async list(req,res){
        const sdata =await student.find()
        res.send(sdata)
    }

    static async find(req,res){
        const ID1 = parseInt(req.params.id)
        const selData = await student.find({ ID : ID1 })
        if(selData.length == 0) res.status(404).send("record not found..")
        res.send(selData)
    }

    static async insert(req,res){
        console.log('inserting..')
        const newdata = req.body
        const data1 = new student(newdata)
        try{
            const result = await data1.save();
            res.send(result)
        }
        catch(ex){
            for(let field in ex.errors)
                console.log(ex.errors[field].message)
        }
    }

    static async update(req,res){
        const ID1 = parseInt(req.params.id)
        const selData = await student.find({ ID : ID1 })
        if(selData.length == 0) res.status(404).send("record not found..")
        const newdata = req.body
        for(let i in newdata){
            selData[0][i] = newdata[i]
        }
        try{
            const result = await selData[0].save();
            res.send(result)
        }
        catch(ex){
            for(let field in ex.errors)
                console.log(ex.errors[field].message)
        }
    }

    static async delete(req,res){
        const ID1 = parseInt(req.params.id)
        const selData = await student.find({ ID : ID1 })
        if(selData.length == 0) res.status(404).send("record not found..")
        const remove = await student.remove({ ID : ID1 })
        res.send(selData)
    }

}

router.get('/', A.list)
router.get('/:id',A.find)
router.post('/',A.insert)
router.put('/:id',A.update)
router.delete('/:id',A.delete)

router.use('/:id/child/result',result)
router.use('/:id/child/fees',fees)

module.exports = router