//Get the packages
var inquirer = require('inquirer');

//create prompts to ask series of questions var inquirer = require('inquirer');
inquirer
.prompt([
    {
        type: 'input',
        message: "What is your name?",
        name: 'First Name',
    },
    {
        type: 'input',
        message: "What is your job title",
        name: 'Job title',
    },
    {
        type: 'input',
        message: "What is ID? ",
        name: 'ID',



    },
    {
        type: 'input',
        message: "What is your email address",
        name: 'Email',



    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'GitHub-Username',}
  
]).then((inquirerResponse) => {
    console.log( inquirerResponse);

  });