

const generateQuestions = questionArr => {
return`${questionArr.map(({question}) => {
return `
* ${question}
`
}
)}
    `
}

module.exports = readmeData => {

    const { project, description, installation, usageInfo, testInfo, label, action, message, contribute, license, github, email, userData } = readmeData;

    console.log('test');
    console.log(userData[0].question);

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
![Badge](https://img.shields.io/badge/${label}-${message}-${action}.svg)

# PROJECT TITLE: ${project}

* [Link to GitHub](https://github.com/${github})
* [Email]: (mailto:${email})

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

* ![Badge](https://img.shields.io/badge/${label}-${message}-${action}.svg)

## Contributing

${contribute}

## Tests

${testInfo}

## Questions

${generateQuestions(userData)}

    `;
};