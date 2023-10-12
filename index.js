// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');  //*fs for writeFile later

inquirer
.prompt(questions)
.then

// TODO: Create an array of questions for user input
const questions = [
    {
            type: 'input',
            message: 'what is the title of your application?',
            name: 'title',
          },
          {
            type: 'input',
            message: 'what is the description of your application?',
            name: 'description',
          },
          {
            type: 'input',
            message: 'what are the installation instructions?',
            name: 'installation',
          },
          {
            type: 'input',
            message: 'what is the usage information of your application?',
            name: 'usage',
          },
          {
            type: 'input',
            message: 'what are the guidelines for contributing to this application? ',
            name: 'contributing',
          },
          {
            type: 'input',
            message: 'what are the test instructions?',
            name: 'test',
          },
          {
            type: 'list',
            message: 'what license are you using?',
            name: 'license',
            choices: ['Apache license 2.0', 'MIT', 'Creative Commons', 'BSD']
          },
          {
            type: 'input',
            message: 'what is the description of your application?',
            name: 'description',
          },
          {
            type: 'input',
            message: 'what is the description of your application?',
            name: 'description',
          },

          
];
// what is the title of your application? //*type: 'input'
// what is the description of your application? //*type: 'input'
// what are the installation instructions? //*type: 'input'
// what is the usage information of your application? //*type: 'input'
// what are the guidelines for contributing to this application? //*type: 'input'
// what are the test instructions? //*type: 'input'
// what license are you using? //*type: 'list'
// please enter your github username. //*type: 'input'
// //*https://github.com/`${username}` so username can turn into link to github
// please enter your email. //*type: 'input'

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();






//README.md is generated
// with the title of my project
// sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// table of contents:
// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)

// enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// license added
// badge for that license added near top of 
// username and email under questions section




// {
//     type: 'input',
//     message: 'What is your user name?',
//     name: 'username',
//   },
//   {
//     type: 'password',
//     message: 'What is your password?',
//     name: 'password',
//   },
//   {
//     type: 'password',
//     message: 'Re-enter password to confirm:',
//     name: 'confirm',
//   },
