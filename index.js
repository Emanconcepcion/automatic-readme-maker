const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of the project?",
    },
    {
      type: "input",
      name: "description",
      message: "Give a brief description of the project.",
    },
    {
      type: "list",
      name: "license",
      message: "Pleace select the appropriate licensing.",
      choices: ["MIT", "Apache 2.0", "Hippocratice", "IBM"],
    },
    {
      type: "input",
      name: "installation",
      message: "Describe the process to install.",
    },
    {
      type: "input",
      name: "contributing",
      message: "Who is envolved in creating this project",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the project usage for?",
    },
    {
      type: "input",
      name: "test",
      message: "Is there a test thats needed to be done?",
    },
    {
      type: "input",
      name: "contact",
      message: "Please enter your GitHub username.",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address.",
    },
  ])
  .then((data) => {
    // 
    const readme = 
    `# ${data.title}
## Table of Contents
* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Contributing](#contributing)
* [Usage](#usage)
* [Test](#test)
* [Email](#email)
* [Contact](#contact)


## Description
${data.description}


## License
![license](https://img.shields.io/static/v1?label=license&message=${data.license}&color=blueviolet)

## Installation
${data.installation}

## Contributing
${data.contributing}

## Usage
${data.usage}

## Test
${data.test}

## Email
${data.email}

## Contact
${data.contact}
`;
    fs.writeFile("readme.md", readme, (err) =>
      err ? console.log(err) : console.log("Successful!")
    );
  });
