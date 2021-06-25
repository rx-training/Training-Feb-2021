const Sequelize = require('sequelize');

//setup connection
const sequelize = new Sequelize("AdventureWorks2012", "sa", 
"1234", {
host: "localhost",
  port: "49825", 
  dialect: "mssql",
  operatorsAliases: false,
  pool: {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
}
});

//check connection
sequelize.authenticate().then(() => {
    console.log('Connection successful');
  })
  .catch((err) => {
    console.log('Unable to connect to database', err);
  });

//model

const User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });
  
  // force: true will drop the table if it already exists
  User.sync({force: true}).then(() => {
    // Table created
    return User.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  });

//query
User.findAll().then(users => {
    console.log(users)
  })
