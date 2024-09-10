import inquirer from "inquirer";
import fs from `fs`;
import generateMarkdown from `./utils/generateMarkdown`
import { type } from "os";
import Choices from "inquirer/lib/objects/choices";

const licences = [`None`, `MIT`, `BSD`, `GPL`, `Apache`];

const questions = [
    inquirer.prompt(
        {
            type:`input`,
            name: `title`,
            message: `what is the title of your project`,
        },
        {
            type: `input`,
            name: `description`,
            message: `provide a short description of the project`,
        },
        {
            type: `input`,
            name: `usage`,
            message: `Provide instructions and examples of the project to use`,
        },
        {
            type: `input`,
            name: `test`,
            message: `enter test instructions`,
        },
        {
            type:`list`,
            name: `license`,
            message: `enter project license: `,
            Choices: licences,
        },
        {
            type:`input`,
            message: `Enter github user`,
            name: `username`,
        },
        {
            type: `input`,
            message: `enter your email address: `,
            name: `email`,
        }
    
    )

];
const fs = require(`fs`);
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        if (err) {
            console.error(`Errror writing file: `, err);
        } else {
            console.log(`File written successfully.`);
        }
    });
}

function init() {
    inquirer.prompt(questions)
    .then (answers => writeToFile(generateMarkdown(answers)))
}

init();
