// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      } else if (license === 'APACHE 2.0') {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      } else if (license === 'GNU GPL v3') {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      } else if (license === 'BSD 3') {
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      } else {
        return '';
      }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license !== "None") {
        return `\n* [license](#license)\n`
    }
    else {
        return ""
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license !== "None") {
        return `## license

        this is project is licensed under ${license}`
    }
    else {
        return ""
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log( "generateMarkdown",data);
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Decription
  ${data.description}

  ## Table Of Contents

  * [installation](#installation)
  
  * [usage](#usage)
  ${renderLicenseLink(data.license)}
  * [contributers](#contributers)

  * [Test](#Test)

  * [questions](#questions)

  ## installtion

  To install run;

  ${data.installation}

  ## usage
  ${data.usage}
   
  ${renderLicenseSection(data.license)}

  ## contributers
  ${data.contribution}

  ## Test

  To run test;
  ${data.test}

  ## questions

  if you have any questions about the repository email;
 ${data.name}; ${data.email} 



`;
}

module.exports = generateMarkdown;