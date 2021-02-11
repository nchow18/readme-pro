

module.exports = readmeData => {

    const { project, description, installation, usageInfo, testInfo, label, color, message, contribute, license, github, email, question } = readmeData;

    // project
    // description
    // installation
    // usageInfo
    // testInfo
    // contribute
    // license
    // github
    // email
    // question

    console.log(`
    ================
    GENERATED README
    ================
    `)

    return `

# PROJECT TITLE: ${project}

* [Link to GitHub](https://github.com/${github})
* [Email]: ${email}

## DESCRIPTION:

${description}

## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Badges](#badges)
* [Contributing](#contribute)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${installation}

## Usage

${usageInfo}

## Credits

${github}

## License

${license}

## Badges

* [Badge](https://img.shields.io/badge/${label}-${message}-${color}.svg)

## Contributing

${contribute}

## Tests

${testInfo}

## Questions

${question}

    `;
};