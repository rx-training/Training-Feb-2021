const info = (req,res,next) => {
  console.log(req.headers.ip)
  if(req.headers.ip == "192.120.3426"){
    console.log(`${req.url} - ${req.method} and ${new Date()}`)
    next();
  }
  else {
       return res.status(404).send("Ip Is Not Found");
  }
  
}
module.exports = info;