const express=require('express');
const Joi=require('joi');
const Genre=require('../models/Genre');
const { route } = require('./courses');
const router=express.Router();

class Genres{
    static async getGenres(req,res){
        try{
            const result=await Genre.find();
            res.status(200).json(result);
        }catch(ex){
            res.status(400).send('Error getting Genres..');
            console.log(ex.message);
        }
    }
    static async postGenres(req,res){
        const schema=Joi.object({
            name:Joi.string().min(3).required()
        });
        const { error }=schema.validate(req.body);
        if(error){ res.status(400).send(error.details[0].message);}

        try{
            const course=new Genre({
                name:req.body.name
            });
            const result=course.save();
            res.status(200).send(result);
        }catch(ex){
            console.log(ex.message);
        }
    }
    static async putGenres(req,res){
        const schema=Joi.object({
            name:Joi.string().min(3).required()
        });
        const { error }=schema.validate(req.body);
        if(error){ res.status(400).send(error.details[0].message); }

        try{
            const result=await Genre.findByIdAndUpdate(req.params.id,{ name:req.body.name },{
                new:true
            });
            if(!result)
                res.status(404).send('No Genres available with this id..'); 
            else
                res.status(200).json(result);
        }catch(ex){
            console.log(ex.message);
        }

    }
    static async deleteGenres(req,res){
        try{
            const result=await Genre.findByIdAndRemove(req.params.id);
            if(!result) 
                res.status(404).send('No Genres available with this id..'); 
            else
                res.status(200).json(result);
        }catch(ex){
            console.log(ex.message);
        }
    }
}

router.get('/',Genres.getGenres);
router.post('/',Genres.postGenres);
router.put('/:id',Genres.putGenres);
router.delete('/:id',Genres.deleteGenres);

module.exports=router;

