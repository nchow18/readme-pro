// create prompt questions
// confirmation to continue adding questions > run questions function
// separate data into ...other
// .then function to generateMarkdown readme
// writeFile readme

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const readmeDetails = require('./utils/data-readme');
const { writeFile } = require('./utils/generate-readme.js')

// TODO: Create a function to initialize app
const init = () => {

    console.log(`
    =================
    Begin ReadMe File
    =================
    `);

    return inquirer.prompt([
        // Project Title is the title of README
        {
            type: 'input',
            name: 'project',
            message: 'What is your Project Title? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Project Title!');
                    return false;
                }
            }
        },
        // SECTION: description, 
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your Project? (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter the description of your Project!');
                    return false
                }
            }
        },
        // SECTION: installation instructions,
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter your installation instructions (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter the installation instructions');
                    return false;
                }
            }
        },
        // SECTION: usage information, 
        {
            type: 'input',
            name: 'usageInfo',
            message: 'Enter the usage information (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage information');
                    return false;
                }
            }
        },
        // SECTION: test instructions,
        {
            type: 'input',
            name: 'testInfo',
            message: 'Please enter test instructions for your Project (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter testing instructions');
                    return false;
                }
            }
        },
        // SECTION: contribution guidelines
        {
            type: 'input',
            name: 'contribute',
            message: 'Input how to contribute to your project (Required)',
            validate: contributeInfo => {
                if (contributeInfo) {
                    return true;
                } else {
                    console.log('Please enter how to contribute');
                    return false;
                }
            }
        },
        // LICENSE OPTION: Apache License, MIT License, GPL License
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license did you choose for your project? (Required)',
            choices: ['Apache License ', 'MIT License ', 'GPL License '],
            validate: licenseInfo => {
                if (licenseInfo) {
                    return true;
                } else {
                    console.log('Please choose a license!');
                    return false;
                }
            }
        },
        // COLOR FOR BADGE
        {
            type: 'list',
            name: 'action',
            message: 'Please choose Badge Colour',
            choices: ['brightgreen', 'green', 'yellowgreen', 'yellow', 'orange', 'red', 'blue', 'lightgrey', 'success', 'important', 'critical', 'informational', 'inactive', 'blueviolet', 'ff69b4', '9cf'],
        },
        // MESSAGE for badge
        {
            type: 'input',
            name: 'message',
            message: 'Please enter message for your Badge',
            validate: messageInfo => {
                if (messageInfo) {
                    return true;
                } else {
                    console.log('Please add your message for your Badge!');
                    return false;
                }
            }
        },
        // LABEL for badge
        {
            type: 'input',
            name: 'label',
            message: 'Please enter a label for your Badge',
            validate: labelInfo => {
                if (labelInfo) {
                    return true;
                } else {
                    console.log('Please enter a label for your Badge!');
                    return false;
                }
            }
        },
        // GITHUB username, added to QUESTIONS section, with link to gitHub profile
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username (Required)',
            validate: githubInfo => {
                if (githubInfo) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username');
                    return false;
                }
            }
        },
        // EMAIL ADDRESS: added to QUESTIONS section
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address (Required)',
            validate: emailInfo => {
                if (emailInfo) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                    return false;
                }
            }
        }
    ])
}

// TODO: Create an array of questions for user input
const readmeQuestions = questionData => {

    if (!questionData.userData) {
        questionData.userData = [];
    }
    
    console.log(`
    ================
    Adding Questions
    ================
    `);

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'question',
                message: 'Please enter your question (Required)',
                validate: questionInput => {
                    if (questionInput) {
                        return true;
                    } else {
                        console.log('Please enter your question');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddQuestion',
                message: 'Would you like to add another Question? (Optional)',
                default: false
            }
        ])
        .then(addQuestion => {
            questionData.userData.push(addQuestion);
            if (addQuestion.confirmAddQuestion) {
                return readmeQuestions(questionData);
            } else {
                return questionData;
            }
        })
}

// TODO: Create a function to write README file
const writeToFile = () => {

    console.log(`
    ======================
    Writing To ReadMe File
    ======================
    `)

    console.log(questionData);
}

// Function call to initialize app
init()
    .then(readmeQuestions)
    .then(questionData => {
        return readmeDetails(questionData);
    })
    .then(pageReadme => {
        return writeFile(pageReadme);
    })
    .catch(err => {
        console.log(err);
    })
    
