const jwt=require('jsonwebtoken');

module.exports=function varifyToken(req,res,next){
    let jwtoken=req.headers['authorization'];
    if(jwtoken !== undefined){
        jwt.verify(jwtoken,global.config.secretKey,{algorithms:global.config.algorithm},(err,authData)=>{
            if(err){
                res.sendStatus(403);
            }
            else{
                req.user=authData;
                next();
            }
        });
    }else{
        res.sendStatus(403);
    }
}