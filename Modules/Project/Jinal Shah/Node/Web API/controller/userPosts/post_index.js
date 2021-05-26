var express = require('express');
var router = express.Router();

const postLike = require('./postLike/postLike_index')
const postDomain = require('../../Domain/Post_Domain')

class postcrud{

    static async all(req,res){
        const domain = new postDomain();
        domain.all(req,res)  
    }

    static async insert(req,res){
        const domain = new postDomain();
        domain.insert(req,res)  
    }

    static async getbyid(req,res){
        const domain = new postDomain();
        domain.getbyid(req,res)  
    }

    static async update(req,res){
        const domain = new postDomain();
        domain.update(req,res)  
    }
    
    static async delete(req,res){
        const domain = new postDomain();
        domain.delete(req,res)  
    }
}

router.get('/', postcrud.all)
router.post('/add',postcrud.insert)
router.get('/:id',postcrud.getbyid)
router.put('/:id',postcrud.update)
router.delete('/:id',postcrud.delete)

router.use('/get/postLikes',postLike)

module.exports = router