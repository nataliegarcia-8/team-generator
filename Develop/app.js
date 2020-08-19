// load modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const questions = require('./lib/questions')

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employeeList = []

// call Manager function to prompt manager questions
buildManager()

//switch statement prompting to add employee 
function getChoice() {
    inquirer.prompt(questions.select)
        .then(function (answer) {
            switch (answer.choice) {
                case 'Intern':
                    return buildIntern()
                case 'Engineer':
                    return buildEngineer()
                case 'No':
                    return renderHTML()
                default:
                    break
            }
        })
}

// prompting manager questions to initiate program
function buildManager() {
    inquirer.prompt(questions.manager)
        .then(function (answer) {
            const employee = new Manager(answer.name, answer.id, answer.email, answer.officeNumber)
            employeeList.push(employee)
            getChoice()
        })
}

// prompting intern questions
function buildIntern() {
    inquirer.prompt(questions.intern)
        .then(function (answer) {
            const employee = new Intern(answer.name, answer.id, answer.email, answer.school)
            employeeList.push(employee)
            getChoice()
        })
}
// prompting engineer questions
function buildEngineer() {
    inquirer.prompt(questions.engineer)
        .then(function (answer) {
            const employee = new Engineer(answer.name, answer.id, answer.email, answer.github)
            employeeList.push(employee)
            getChoice()
        })
}
// rendering HTML from user input and templates 
function renderHTML() {
    const html = render(employeeList)

    fs.writeFileSync(outputPath, html)
}
