//Get the packages
const { profile } = require('console');
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
        
       type:"list",
        message: "Choose your job title",
        choices:['Engineer', 'Intern', 'Manager','Employee'],
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

  //Get the element by id and attach the user inputs to it 

//  document.getElementById("profile").innerHTML=inquirerResponse;
