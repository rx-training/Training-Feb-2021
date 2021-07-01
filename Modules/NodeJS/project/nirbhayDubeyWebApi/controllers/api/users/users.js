const express=require('express');
const bcrypt=require('bcrypt');
const User=require('../../../models/User');
const router=express.Router();

class UsersRoute{
    static async getUser(req,res){
        User.find()
            .then(users => {
                if(!users) return res.status(404).json({
                    error:"No Users found..."
                });
                else{
                    res.status(200).json(users);
                }
            })
            .catch(ex => console.log(ex));
    }

    static async postUser(req,res){
        User.findOne({ email:req.body.email })
            .then(user => {
                if(user) return res.status(400).json({
                    error:"User with the given email-id, already exist."
                });
                else{
                    if(req.body.trainer){
                        User.findOne({_id:req.body.trainer})
                            .then(user=>{
                                if(!user) return res.status(400).json({
                                    error:"The trainer with the given Id was not found.."
                                });
                            })
                            .catch(ex => console.log(ex));
                    }
            
                    const newUser=new User({
                        username:req.body.username,
                        email:req.body.email,
                        password:req.body.password,
                        role:req.body.role,
                        status:req.body.status,
                        trainer:req.body.trainer
                    });
                    
                    bcrypt.hash(newUser.password,10,(err,hash)=>{
                        if(err) return res.status(500).json({
                            error:"ERROR: while generating hash for password."
                        });
                        else{
                            newUser.password=hash;
                            newUser.save()
                                .then(user => {
                                    if(user){
                                        res.status(200).json({
                                            msg:"User created successfully"
                                        });
                                    }
                                    else{
                                        res.status(400).json({
                                            error:"ERROR: while creating User"
                                        });
                                    }
                                })
                                .catch(ex => console.log(ex));
                        }
                    });
                }
            })
            .catch(ex => console.log(ex));
    }

    static async putUser(req,res){

    }

    static async deleteUser(req,res){
        
    }
}

router.get('/',UsersRoute.getUser);
router.post('/',UsersRoute.postUser);
router.put('/:id',UsersRoute.putUser);
router.delete('/:id',UsersRoute.deleteUser);

module.exports = router;

