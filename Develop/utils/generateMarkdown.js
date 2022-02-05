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
    case "Unlicense":
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    default:
      return ""
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
    case "Unlicense":
      return 'http://unlicense.org/'
 }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `
    ${renderLicenseLink(license)}`
  }else{
    return ""
  }
 }
// render a collaboration section. If empty return ""
function collabGen(collab){
  if(collab){
    return `-Collaborators\n    ${collab}`
  }else{
    return ""
  }
}
// render a section on third party use. if empty return ""
function thirdPartyGen(thirdParty){
  if(thirdParty){
    return `-Third Party Assets\n    ${thirdParty}`
  }else{
    return ""
  }
}
//render a section on tutorial usage. if empty return ""
function tutorialGen(tutorial){
  if(tutorial){
    return `-Tutorials Used\n  ${tutorial}`
  }else{
    return ""
  }
}
//render a section for credits. if empty return ""
function renderCredits(collab,thirdParty,tutorial){
   if(collab||thirdParty||tutorial){
     return`
  ${collabGen(collab)}
  ${thirdPartyGen(thirdParty)}
  ${tutorialGen(tutorial)}`
    }else{
      return ""
    }
 }
 function imageGen(image){
  if(image){
    return `![]${image})`
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
  - Fubctionality

    ${data["functionality"]}
  - Problem this aims to solve?

    ${data["problem"]}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Test](#test)
  * [Questions](#questions)

  ## Installation
    ${data["installation"]}

  ## Usage
    ${data["instruction"]}
 ${imageGen(data["image"])}

  ## Contributing/Credits
 ${renderCredits(data["collab"],data["3rdParty"],data["tutorial"])}
  ## License
 ${renderLicenseSection(data["license"])}
  ## Test
    -${data["test"]}
  ## Questions
    -For any questions or concerns please reach out to me at
    github:  https://github.com/${data["github"]}
    email:  ${data["email"]}
    `;
}

exports.generateMarkdown = generateMarkdown;
