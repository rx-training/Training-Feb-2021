const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const students = require('./student.json');


app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API'
  });
});

app.get('/students/:id', verifyToken, (req, res) => {  
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
        const student = students.find(c => c.ID === parseInt(req.params.id))
        // res.send(`The fees of the ${student.Name} is : ${student.Fees.Amount} `);
        res.write(`The Result of ${student.Name} is : \n`);
        res.write(JSON.stringify(student.Result));
        res.end(`\n The fees of the ${student.Name} is : ${student.Fees.Amount} `);
    }
  });
});

app.get('/api/login', (req, res) => {
  // Mock user
  const user = {
    id: 1, 
    username: 'brad',
    email: 'brad@gmail.com'
  }

  jwt.sign({user}, 'secretkey', { expiresIn: '300s' }, (err, token) => {
    res.json({
      token
    });
  });
});

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
 
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }

}

app.listen(3000, () => console.log('Server started on port 3000'));