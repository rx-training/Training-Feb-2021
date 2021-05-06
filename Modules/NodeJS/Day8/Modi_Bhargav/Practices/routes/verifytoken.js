function verifyToken(req,res,next) {
  const Header = req.headers['authorization'];
  if (typeof Header !== 'undefined'){
    const h = Header.split(' ');

    const htoken = h[1];

    req.token = htoken;

    next()
  }
  else{
    res.sendStatus(403);
  }
}
module.exports = verifyToken
