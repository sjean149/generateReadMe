// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//import { error } from 'console';


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the Title of the ReadMe"
    },
    {
        type: "input",
        name: "description",
        message: "Write a short description explaining the what, why, and how of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions. Press enter when you have finished."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions and examples for use"
    },
    {
        type: "input",
        name: "authors",
        message: "Please enter contributing authors",
    },
    {
        type: "input",
        name: "tests",
        message: "Which tests if any are you using? Feel free to write 'none' if there are none",
    },
    {
        type: "list",
        name: "license",
        message: "Select which liscence you would like to use",
        choices: ["BSD", "MIT", "GNU", "Apache", 'ISC']
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    if (fs.existsSync('GENERATED_README.md')){
        fs.unlinkSync('GENERATED_README.md')
    }

    fs.writeFile(fileName, data, (error) => {
    if (error) {
        console.log("It did not write to file");
    }
})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const data = generateMarkdown(answers); 
        writeToFile('GENERATED_README.md', data);
})
 .catch(error=>{console.error(`README could not be created because of this error: ${error}`)})

 }

// Function call to initialize app
init();
