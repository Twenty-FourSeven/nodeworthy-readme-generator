const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
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
      name: "installation",
      message: "Please provide installation steps for your project.",
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide usage instructions for your project.",
    },
    {
      type: "input",
      message: "How may users contribute to your project?",
      name: "contribution",
    },
    {
      type: "input",
      message: "How may users test your project?",
      name: "test",
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select a license for your project:',
      choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC License', 'No License']
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
  ])
  .then((data) => {
    fs.writeFile("README.md", generateMarkdown(data), (err) => {
      if (err) throw err;
      console.log("README file created!");
    });
  });
