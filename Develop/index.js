// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "what is the purpose or description of this project?"
    },
]).then(answers => {
    fs.writeFile("README.md", generateMarkdown(answers), (err) => {
        if (err) throw err;
        console.log("README file created!")
    })
})