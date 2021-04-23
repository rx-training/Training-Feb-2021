const jwt = require('jsonwebtoken');
const ensureToken = (req, res, next) => {
    jwt.verify(req.token, process.env.SECRET, (err, data) => {
        if (err) {
            res.json(err)
        }
        
        next();
  

    })


}

module.exports = ensureToken;