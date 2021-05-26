const jwt = require('jsonwebtoken');
const config = require('../static/config');

const verifyToken = (req, res, next) => {
  const token = req.headers["token"]
  jwt.verify(token, global.config.secretKey, {
    algorithm: global.config.algorithm,
  }, (err, decoded) => {
    if (err) {
      let errordata = {
        message: err.message,
        expiredAt: err.expiredAt
      };
      return res.status(401).json({
        message: "Unauthorized Access"
      });
    }
    req.decoded = decoded;
    next();
  })
}

module.exports = verifyToken
