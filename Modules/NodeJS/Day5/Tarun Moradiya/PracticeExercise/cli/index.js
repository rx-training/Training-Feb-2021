// const inquirer = require('inquirer');
// const Choices = require('inquirer/lib/objects/choices');

// var questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "What's your name?"
//   },
//   {
//     type: 'checkbox',
//     name: 'name2',
//     message: "What's your Last name?"
//   }
// ]

// inquirer
//     .prompt(questions)
//     .then(answers => {
//         console.log(`Hi ${answers['name']} ${answers['name2']}!`)
//     })
//     .catch(error => {
//         if(error.isTtyError) {
//         // Prompt couldn't be rendered in the current environment
//         } else {
//         // Something else went wrong
//         }
//     });


/////////////////////////////////////////////////////////////////////////////////////////////////

//List

// const inquirer = require('inquirer');

// inquirer
//   .prompt([
//     {
//       type: 'list',
//       name: 'reptile',
//       message: 'Which is better?',
//       choices: ['alligator', 'crocodile'],
//     },
//   ])
//   .then(answers => {
//     console.info('Answer:', answers.reptile);
//   });

  /////////////////////////////////////////////////////////////////////////////////////

  //rawlist

//   const inquirer = require('inquirer');

// inquirer
//   .prompt([
//     {
//       type: 'rawlist',
//       name: 'reptile',
//       message: 'Which is better?',
//       choices: ['alligator', 'crocodile'],
//     },
//   ])
//   .then(answers => {
//     console.info('Answer:', answers.reptile);
//   });

/////////////////////////////////////////////////////////////////////////////////////////////////

//Expandable List

// const inquirer = require('inquirer');

// inquirer
//   .prompt([
//     {
//       type: 'expand',
//       name: 'reptile',
//       message: 'Which is better?',
//       choices: [
//         {
//           key: 'a',
//           value: 'alligator',
//         },
//         {
//           key: 'c',
//           value: 'crocodile',
//         },
//       ],
//     },
//   ])
//   .then(answers => {
//     console.info('Answer:', answers.reptile);
//   });


/////////////////////////////////////////////////////////////////////////////////////////////////

//checkbox

// const inquirer = require('inquirer');

// inquirer
//   .prompt([
//     {
//       type: 'checkbox',
//       name: 'reptiles',
//       message: 'Which reptiles do you love?',
//       choices: [
//         'Alligators', 'Snakes', 'Turtles', 'Lizards',
//       ],
//     },
//   ])
//   .then(answers => {
//     console.info('Answer:', answers.reptiles);
//   });

/////////////////////////////////////////////////////////////////////////////////////////////////

//password

// const inquirer = require('inquirer');

// inquirer
//   .prompt([
//     {
//       type: 'password',
//       name: 'secret',
//       message: 'Tell me a secret',
//     },
//   ])
//   .then(answers => {
//     // Logging out the secret defeats the purpose though ;)
//     console.info('Answer:', answers.secret);
//   });

/////////////////////////////////////////////////////////////////////////////////////////////////


//Editor

/////////////////////////////////////////////////////////////////////////////////////////////////

const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'editor',
      name: 'story',
      message: 'Tell me a story, a really long one!',
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.story);
  });