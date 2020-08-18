module.exports = {
    manager: [
        {
            name: "name",
            type: "input",
            message: "What is the manager's name?"
        },
        {
            name: "id",
            type: "input",
            message: "What is the manager's ID?"
        },
        {
            name: "email",
            type: "input",
            message: "What is the manager's email?"
        },
        {
            name: "officeNumber",
            type: "input",
            message: "What is the manager's office number?"
        },
    ],
    intern: [
        {
            name: "name",
            type: "input",
            message: "What is the intern's name?"
        },
        {
            name: "id",
            type: "input",
            message: "What is the intern's ID?"
        },
        {
            name: "email",
            type: "input",
            message: "What is the intern's email?"
        },
        {
            name: "school",
            type: "input",
            message: "What school does the intern attend?"
        },
    ],
    engineer: [
        {
            name: "name",
            type: "input",
            message: "What is the engineer's name?"
        },
        {
            name: "id",
            type: "input",
            message: "What is the engineer's ID?"
        },
        {
            name: "email",
            type: "input",
            message: "What is the engineer's email?"
        },
        {
            name: "gitHub",
            type: "input",
            message: "What is the engineer's gitHub?"
        },
    ],
    select: {
        name: "choice",
        type: "list",
        message: "Add new employee:",
        choices: ['Intern', 'Engineeer', 'Exit']
    }
}