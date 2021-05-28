const express=require('express');
const Coursevideo=require('../../../../models/Coursevideo');
const router=express.Router({mergeParams:true});

class CoursevideoRoute{
    static async getCoursevideos(req,res){

    }
    static async postCoursevideo(req,res){

    }
    static async putCoursevideo(req,res){

    }
    static async deleteCoursevideo(req,res){

    }
}


router.get('/',CoursevideoRoute.getCoursevideos);
router.post('/',CoursevideoRoute.postCoursevideo);
router.put('/:vid',CoursevideoRoute.putCoursevideo);
router.delete('/:vid',CoursevideoRoute.deleteCoursevideo);

module.exports = router;