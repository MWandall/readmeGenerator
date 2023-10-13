// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![Static Badge](https://img.shields.io/badge/license-${data.license}-green)


  ## Description

  - ${data.description}

  ## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

Include screenshots as needed.

To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it.

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.


## License

${data.license}

For more information please see [info](https://choosealicense.com/licenses/${data.license}/)

## How to Contribute

${data.contributing}


## Tests

${data.test}

## Questions

For any further questions please contact [${data.username}](https://github.com/${data.username}) at [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;

// tHEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under