const express=require('express');
const Course=require('../models/Course');
const router=express.Router();

class Courses{
    static async getCourses(req,res){
        try{
            const result=await Course.find();
            res.status(200).json(result);
        }catch(ex){
            console.log(ex.message);
        }
    }
    static async createCourse(req,res){
        const course=new Course({
            tags:['Python','Backend'],
            name:"Python Course",
            author:"saurabh",
            isPublished:true,
            price:15.8
        });
    
        try{
            const result =await course.save();
            console.log(result);
        }catch(ex){
            console.log(ex.message);
        }
    }
}

router.get('/',Courses.getCourses);
router.get('/create',Courses.createCourse);

module.exports = router;