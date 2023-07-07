// TODO: Include packages needed for this application
// Imported required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the name of your project?',
    },
    {
        name: 'contents',
        type: 'input',
        message: "List the Contents of your repo's README.",
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please write a detailed description of your project',
    },
    {
        name: 'installation',
        type: 'input',
        message: 'How do you install the dependencies for your project?',
        default: 'npm i',
    },
    {
        name: 'license',
        type: 'list',
        message: 'What kind of license should be applied to your project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        name: 'usage',
        type: 'input',
        message: 'What info does the user need about using your repo?',
    },
    {
        name: 'contribute',
        type: 'input',
        message: 'How can a fellow programmer contribute to your project?',
    },
    {
        name: 'test',
        type: 'input',
        message: 'How are tests run on your project?',
        default: 'npm test',
    },

    {
        name: 'github',
        type: 'input',
        message: 'What is your GitHub username?',
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?',
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
    console.log('README.md has been generated!');
}

// TODO: Create a function to initialize app
function initialize() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
      });
}

// Function call to initialize app
initialize();