// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
const generateMarkdown=(data) => {
  return `# ${data["title"]}
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

  ## Credits

  -Collaborators
    ${data["collab"]}

  -Third Party Assets
    ${data["3rdParty"]}

  -Tutorials Used
    ${data["tutorial"]}

  ## License
    ${data["license"]}
  
  ## Questions
    -For any questions or concerns please reach out to me at
    github:https://github.com/${github}
    or
    email:${email}
    `;
}

exports.generateMarkdown = generateMarkdown;
