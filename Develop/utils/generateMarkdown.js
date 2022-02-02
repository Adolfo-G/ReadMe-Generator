// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
  }else{
    return ""
  } 
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){
    return `https://opensource.org/licenses/${license}`
  }else{
    return ""
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
