function generateMarkdown(data) {
  return `
# ${data.title}

![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")

## Description:
  ${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation:
  ${data.installation}

## Test:
  ${data.test}

## Usage:
  ${data.usage}

## Contributing:
  ${data.contribution}

## License:
For more information about the ${data.license} License, click on the link below.

- [License](https://opensource.org/licenses/${data.license})

## Questions:
For additional information about the ReadMe Generator you can go to my GitHub page at the following link:

- [GitHub Profile](https://github.com/${data.username})

For additional questions please email me at: ${data.email}

[Video Walkthrough](https://___________________________________________)
`;
}
// store variables or methods in module.exports
module.exports = generateMarkdown;
