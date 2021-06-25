const info=(req,res,next) => {
    console.log(req.headers.ip);
    // if(req.headers.ip=="192.168.1")
    // {
    //     console.log(`${req.url} - ${req.method} and ${new Date()}`);
    //     next();
    // }
    // else
    // {
    //     return res.status(404).send("IP not Available" );
    // }
    

    console.log(`${req.url} - ${req.method} and ${new Date()}`);
         next();


}
module.exports=info;