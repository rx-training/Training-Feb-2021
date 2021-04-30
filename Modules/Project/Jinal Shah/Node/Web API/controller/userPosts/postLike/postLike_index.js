var express = require('express');
var childRouter = express.Router({ mergeParams : true});

const postLike = require('../../../models/PostLikeModel')

const postLikeDomain = require('../../../Domain/postLike_Domain')

class postLikecrud{

    static async all(req,res){
        const domain = new postLikeDomain();
        domain.all(req,res)  
    }

    static async insert(req,res){
        const domain = new postLikeDomain();
        domain.insert(req,res)  
    }

    static async getbyid(req,res){
        const domain = new postLikeDomain();
        domain.getbyid(req,res)  
    }

    static async update(req,res){
        const domain = new postLikeDomain();
        domain.update(req,res)  
    }

    static async delete(req,res){
        const domain = new postLikeDomain();
        domain.delete(req,res)  
    }

}

childRouter.get('/',postLikecrud.all)
childRouter.post('/insert',postLikecrud.insert)
childRouter.get('/:id',postLikecrud.getbyid)
childRouter.put('/:id',postLikecrud.update)
childRouter.delete('/:id',postLikecrud.delete)

module.exports = childRouter