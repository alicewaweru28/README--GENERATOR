const fs = require("fs");
const path = require("path");
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

//Array of questions for users to generate the Readme.
function promptUser() {
    return inquirer.prompt([
    {
        type:"input",
        message: "Project Title",
        Name: "title",
    },
    { 
        type: "input",
        message: "Description of the Project?",
        Name: "Description",
    },
    {  
        type: "input",
         message: "run a test on your application?",
          name: "tests",
    },
    { 
        type: "input",
        message: " email address?",
        name: "email"
    },
    {
        type:"input",
        message: "contributors of the project?",
        name:"contributuion",
    },
    { 
        type: "input",
        message: "Repository name?",
        name: "repo"
    },
    { 
        type: "input",
        message: "Instructions on how to use you project?",
        name: "usage",
    },
    { 
        type: "input",
        message: " GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "installation instructions for this project?",
        name: "installation",
    },
    {
        type: "checkbox",
        message: "license project",
        choices:[
            "Existing license: ORIGINAL",
          "MIT",
          "ISC",
          "GNU GPLv3",
          "None"
        ]
    },
    { 
        type: "input",
        message: "testing instructions for this project",
        name: "testing",
    }
]);
}

//This function runs after the prompts are answered to generateMarkdown function and write the READme.

function init() {
    try {
      const answers =  promptUser();
      const markDown = generateMarkdown(answers);
      onsole.log(markDown);
      console.log(answers);
  
      await writeFileAsync(outputPath, markDown);
  
      console.log("Successfully wrote to README.md");
    } catch(err) {
      console.log(err);
    }
  }
  
  init();
