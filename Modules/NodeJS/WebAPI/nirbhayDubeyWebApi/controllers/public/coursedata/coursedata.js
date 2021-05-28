const express=require('express');
const passport=require('passport');
const Course=require('../../../models/Course');
const Courseppt=require('../../../models/Courseppt');
const Coursevideo=require('../../../models/Coursevideo');
const router=express.Router();

class CoursedataRoute{
    static async getCourses(req,res){
        Course.find()
            .then(courses =>{
                if(!courses) return res.status(404).json({
                    error:"ERROR: No Course found"
                });
                else{
                    res.status(200).json(courses);
                }
            })
            .catch(ex => console.log(ex));
    }

    static async getCourseppts(req,res){
        const coursename=req.path.slice(1).split('-')[0];
        const re=new RegExp(coursename,"i");
        Course.findOne({ name:{ $regex:re }})
            .then(course =>{
                if(!course) return res.status(404).json({
                    error:"ERROR: No Course found"
                });
                else{
                    Courseppt.find({ cid:course._id })
                        .then(ppts => {
                            //All PPTS Found HERE
                            res.status(200).json(ppts);
                        })
                        .catch(ex => console.log(ex));
                }
            })
            .catch(ex => console.log(ex));
    }

    static async getCoursevideos(req,res){
        const coursename=req.path.slice(1).split('-')[0];
        const re=new RegExp(coursename,"i");
        Course.findOne({ name:{ $regex:re } })
            .then(course =>{
                if(!course) return res.status(404).json({
                    error:"ERROR: No Course found"
                });
                else{
                    Coursevideo.find({ cid:course._id })
                        .then(videos => {
                            //All VIDEOS Found HERE
                            res.status(200).json(videos);
                        })
                        .catch(ex => console.log(ex));
                }
            })
            .catch(ex => console.log(ex));
    }
}

router.get('/',passport.authenticate("jwt",{ session:false }),CoursedataRoute.getCourses);
router.get(/.*-ppt$/,passport.authenticate("jwt",{ session:false }),CoursedataRoute.getCourseppts);
router.get(/.*-videos$/,passport.authenticate("jwt",{ session:false }),CoursedataRoute.getCoursevideos);

module.exports = router;