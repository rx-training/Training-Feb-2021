const express=require('express');
const Movie=require('../models/Movie');
const Genre=require('../models/Genre');
const router=express.Router();

class MovieRoute{

    static async getMovies(req,res){
        const movies=await Movie.find();
        res.status(200).json(movies);
    }
    static async getMovie(req,res){
        const movie=await Movie.findById(req.params.id);
        if(!movie) return res.status(400).send("The movie with given Id was not found..");

        res.status(200).json(movie);
    }
    static async postMovie(req,res){
        const genre=await Genre.findById(req.body.genreid);
        if(!genre) return res.status(400).send("The genre with given Id was not found..");

        const newMovie=new Movie({
            title:req.body.title,
            genre:{
                _id:genre._id,
                name:genre.name
            },
            numberInStock:req.body.numberinstock,
            dailyRentalRate:req.body.dailyrentalrate
        });

        const result=await newMovie.save();
        res.status(200).json({
            msg:"Movie successfully stored",
            movie:result
        });
    }
    static async putMovie(req,res){
        const genre=await Genre.findById(req.body.genreid);
        if(!genre) return res.status(400).send('The genre with given Id was not found..');

        const result=await Movie.findByIdAndUpdate(req.params.id,{
            title:req.body.title,
            genre:{
                _id:genre._id,
                name:genre.name
            },
            numberInStock:req.body.numberinstock,
            dailyRentalRate:req.body.dailyrentalrate  
        },{
            new:true
        });

        if(!result) return res.status(404).send('The movie with given Id was not found..');

        res.status(200).json({
            msg:'Movie updated Successfully',
            movie:result
        });
    }
    static async deleteMovie(req,res){
        const result=await Movie.findByIdAndRemove(req.params.id);
        if(!result) return res.status(404).send('The movie with given Id was not found..');

        res.status(200).json({
            msg:'Movie deleted Successfully',
            movie:result
        });
    }
}

router.get('/',MovieRoute.getMovies);
router.get('/:id',MovieRoute.getMovie);
router.post('/',MovieRoute.postMovie);
router.put('/:id',MovieRoute.putMovie);
router.delete('/:id',MovieRoute.deleteMovie);

module.exports=router;