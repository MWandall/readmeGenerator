// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');  //*fs for writeFile later
const generateMarkdown = require('./utils/generateMarkdown.js')



// TODO: Create an array of questions for user input
const questions = [
    {
            type: 'input',
            message: 'What is the title of your application?',
            name: 'title',
          },
          {
            type: 'input',
            message: 'What is the description of your application?',
            name: 'description',
          },
          {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'installation',
          },
          {
            type: 'input',
            message: 'What is the usage information of your application?',
            name: 'usage',
          },
          {
            type: 'input',
            message: 'What are the guidelines for contributing to this application? ',
            name: 'contributing',
          },
          {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'test',
          },
          {
            type: 'list',
            message: 'What license are you using?',
            name: 'license',
            choices: ['apache-2.0', 'mit', 'mpl-2.0', 'unlicense']
          },
          {
            type: 'input',
            message: 'Please enter your github username.',
            name: 'username',
          },
          {
            type: 'input',
            message: 'Please enter your email.',
            name: 'email',
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


inquirer
.prompt(questions)
.then((answers) => {
    const readmeContent = generateMarkdown(answers);

    fs.writeFile('./utils/readme.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
  });





// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

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
