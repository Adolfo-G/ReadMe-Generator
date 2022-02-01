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
            message: 'What was your motivation?',
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
            name: 'learn',
            message: 'What did you learn?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What did you learnWhat are the steps required to install your project ? Provide a step - by - step description of how to get the development environment running?',
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
            name: 'photo',
            message: 'Enter the name of your photo: "example.jpeg"',
        },
        {
            type: 'input',
            name: 'license',
            message: 'What is the license of your project?',
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
    fs.writeFile(fileName,JSON.parse(data),(err) =>{
        console.log(err)
    })
}

// TODO: Create a function to initialize app
function init() { 
    questions()
        .then((data)=>writeToFile("README.md",JSON.stringify(generate.generateMarkdown(data))))
}

// Function call to initialize app
init();


