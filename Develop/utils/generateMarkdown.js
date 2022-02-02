// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT":
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case "Apache 2.0":
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case "GNU GPLv3":
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    case "ISC":
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    case "Unlist":
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
 }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "MIT":
      return 'https://opensource.org/licenses/MIT'
    case "Apache 2.0":
      return 'https://opensource.org/licenses/Apache-2.0'
    case "GNU GPLv3":
      return 'https://www.gnu.org/licenses/gpl-3.0'
    case "ISC":
      return 'https://opensource.org/licenses/ISC'
    case "Unlist":
      return 'http://unlicense.org/'
 }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `
  ## License
    ${renderLicenseLink(license)}`
  }else{
    return ""
  }
 }

 function renderCredits(collab,thirdParty,tutorial){
   if(collab||thirdParty||tutorial){
     return`
  ## Credits

  -Collaborators
    ${collab}
      
  -Third Party Assets
    ${thirdParty}
      
  -Tutorials Used
    ${tutorial}`
    }else{
      return ""
    }
 }

// TODO: Create a function to generate markdown for README
const generateMarkdown=(data) => {
  return `
  ${renderLicenseBadge(data["license"])}
  # ${data["title"]}
  ## Description

  - Motivation
    ${data["motivation"]}
  - Purpose of project
    ${data["why"]}
  - Problem this aims to solve
    ${data["what"]}
  - What I learned
    ${data["learn"]}

  ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

  ## Installation

    ${data["installation"]}

  ## Usage

    ${data["instruction"]}
    ![alt text](assets/images/${data["photo"]})
 ${renderCredits(data["collab"],data["3rdParty"],data["tutorial"])}
 ${renderLicenseSection(data["license"])}
  ## Questions
    -For any questions or concerns please reach out to me at
    github:https://github.com/${data["github"]}
    email:${data["email"]}
    `;
}

exports.generateMarkdown = generateMarkdown;
