// TODO: Include packages needed for this application
const inquirer=require("inquirer");
const fs=require("fs")
const generate=require("../Develop/utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation to make this?',
        },
        {
            type: 'input',
            name: 'why',
            message: 'Why did you build this project?',
        },
        {
            type: 'input',
            name: 'what',
            message: 'What problem does it solve?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project ? \nProvide a step - by - step description of how to get the development environment running?',
        },
        {
            type: 'input',
            name: 'collab',
            message: 'Who collaborated in this project?',
        },
        {
            type: 'input',
            name: '3rdParty',
            message: 'Where there third party sources?',
        },
        {
            type: 'input',
            name: 'tutorial',
            message: 'Any links to tutorials?',
        },
        {
            type: 'input',
            name: 'instruction',
            message: 'Provide instructions and examples for use.',
        },
        {
            type: 'input',
            name: 'image',
            message: 'Enter the name of your image: "example.jpeg"',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is the license of your project?',
            choices:["MIT","Apache 2.0", "GNU GPLv3", "ISC","Unlicense",""]
        },
        {
            type: 'input',
            name: 'test',
            message: 'Does this project have any tests. Please enter them here.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github account username',
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName,data,(err) =>{
    })
}

// TODO: Create a function to initialize app
function init() { 
    questions()
        .then((data)=>writeToFile("README.md",generate.generateMarkdown(data)))
}

// Function call to initialize app
init();


