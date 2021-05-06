const express=require('express');
const Genre=require('../models/Genre');
const router=express.Router();

class GenreRoute{
    static async getGenres(req,res){
        const genres=await Genre.find();
        res.status(200).json(genres);
    }

    static async getGenre(req,res){
        const genre=await Genre.findById(req.params.id);
        if(!genre) return res.status(404).send("The genre with the given Id was not found");

        res.status(200).json(genre);
    }

    static async postGenre(req,res){
        const newGenre=new Genre({
            name:req.body.name
        });
        const result=await newGenre.save();
        res.status(200).json({
            msg:"Genre added successfully",
            genre:result
        });
    }

    static async putGenre(req,res){
        const result=await Genre.findByIdAndUpdate(req.params.id,{
            name:req.body.name
        },{
            new:true
        });
        if(!result) return res.status(404).send("The genre with the given Id was not found");
        
        res.status(200).json({
            msg:"Genre updated successfully",
            genre:result
        });
    }

    static async deleteGenre(req,res){
        const result=await Genre.findByIdAndRemove(req.params.id);
        if(!result) return res.status(404).send("The genre with the given Id was not found");

        res.status(200).json({
            msg:"Genre deleted successfully",
            genre:result
        });
    }
}

router.get('/',GenreRoute.getGenres);
router.get('/:id',GenreRoute.getGenre);
router.post('/',GenreRoute.postGenre);
router.put('/:id',GenreRoute.putGenre);
router.delete('/:id',GenreRoute.deleteGenre);

module.exports = router;