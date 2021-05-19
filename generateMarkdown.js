// This function will generate the Readme by populating with given answers.

function generateMarkdown(answers) {
    console.log(answers);
    return `
  ### __*${answers.title}*__
  ![GitHub](https://img.shields.io/github/license/${answers.Github}/${answers.repo})
  
  ## __Description__
  ${answers.description}
  
  ### __Usage__
  ${answers.usage}
  ### __Contributing__

  ${answers.contributing}
  ## __License__

  ${answers.license}
  ### __Tests__

  ${answers.tests}
  ### __Installation__
  ${answers.installation}

  ### __Questions__
  - Find me on [Github](https//github-dotcom.gateway.web.tr/${answers.github})
  For further information or questions, email me at ${answers.email}`
  }
  
  module.exports = generateMarkdown;
  