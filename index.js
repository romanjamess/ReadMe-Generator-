// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your  Github username?',
      },
      {
          type: 'input',
          name: 'email',
          message: 'What is your email address?',
      },
      {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?',
      },
      {
          type: 'input',
          name: 'description',
          message: 'Please provide a description of your project',
      },
      {
          type: 'list',
          name: 'license',
          message: 'Please choose a license',
          choices: ['MIT', 'APACHE 2.0', 'GNU GPL v3', 'BSD 3', 'None']
      },
      {
          type: 'input',
          name: 'installation',
          message: 'What are the steps required to install your project?'
      },
      {
          type: 'input',
          name: 'usage',
          message: 'Please provide instructions for use.'
      },
      {
          type: 'input',
          name: 'contribution',
          message: 'What should the user know about making contributions to the repository?'
      },
      {
          type: 'input',
          name: 'test',
          message: 'Please provide instructions for testing.'
      }
  
    ])
    .then((res => {
        fs.writeFileSync("./utils/README.md", generateMarkdown(res))
        
    }));}

// Function call to initialize app
init();


