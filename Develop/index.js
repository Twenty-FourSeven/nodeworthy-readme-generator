const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the purpose or description of this project?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the purpose or description of this project?",
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub user name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },

]).then(data => {
    fs.writeFile("README.md", generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log("README file created!")
    })
})
