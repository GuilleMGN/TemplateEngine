const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Stores IDs to avoid any duplicates upon creation
const ids = [];
// List of team members and their information
const team = [];

// Prompt user to add a new employee
newEmployee = () => {
    inquirer.prompt([
        {   // Ask which team member to add
            type: 'list',
            name: 'role',
            message: 'Which Team Member would you like to add? ',
            choices: [
                'Engineer',
                'Intern',
                'None of the above'
            ]
        }
    ]).then((data) => {
        switch (data.role) {
            case 'Engineer':
                newEngineer();
                break;
            case 'Intern':
                newIntern();
                break;
            case 'None of the above':
                console.log("Success! ");
                createTeam();
                break;
        }
    });
}
// This will call the render function to generate the HTML block of divs for each employee
// First it will check if directory already exists. If not, it will create a new one
createTeam = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(team), "utf8")
}
// Get information for the Manager
newManager = () => {
    inquirer.prompt([
        {   // Ask for Manager's name
            type: 'input',
            name: 'name',
            message: "Please enter the Manager's name: ",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a name! ";
            }
        },
        {   // Ask for Manager's ID number
            type: 'input',
            name: 'id',
            message: "Please enter the Manager's ID number: ",
            validate: answer => {
                const pass = answer.match(/^[0-9]+$/);
                if (pass) {
                    if (ids.includes(answer)) {
                        return "This ID is already in use! Please try again. ";
                    }
                    else {
                        return true;
                    }
                }
                return "Please enter a valid ID number! ";
            }
        },
        {   // Ask for Manager's email address
            type: 'input',
            name: 'email',
            message: "Please enter the Manager's email address: ",
            validate: answer => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                    return true;
                }
                return "Please enter a valid email address! ";
            }
        },
        {   // Ask for Manager's office number
            type: 'input',
            name: 'office',
            message: "Please enter the Manager's office number: "
        },
    ])
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.office);
            team.push(manager);
            ids.push(data.id);
            newEmployee();
        });
}
// Get information for the Engineer
newEngineer = () => {
    inquirer.prompt([
        {   // Ask for Engineer's name
            type: 'input',
            name: 'name',
            message: "Please enter the Engineer's name: ",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a name! ";
            }
        },
        {   // Ask for Engineer's ID
            type: 'input',
            name: 'id',
            message: "Please enter the Engineer's ID number: ",
            validate: answer => {
                const pass = answer.match(/^[0-9]+$/);
                if (pass) {
                    if (ids.includes(answer)) {
                        return "This ID is already in use! Please try again. ";
                    }
                    else {
                        return true;
                    }
                }
                return "Please enter a valid ID number! ";
            }
        },
        {   // Ask for Engineer's email address
            type: 'input',
            name: 'email',
            message: "Please enter the Engineer's email address: ",
            validate: answer => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                    return true;
                }
                return "Please enter a valid email address! ";
            }
        },
        {   // Ask for Engineer's GitHub username
            type: 'input',
            name: 'github',
            message: "Please enter the Engineer's GitHub username: ",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid username! ";
            }
        },
    ])
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            team.push(engineer);
            ids.push(data.id);
            newEmployee();
        });
}
// Get information for the Intern
newIntern = () => {
    inquirer.prompt([
        {   // Ask for Intern's name
            type: 'input',
            name: 'name',
            message: "Please enter the Intern's name: ",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a name! ";
            }
        },
        {   // Ask for Intern's ID
            type: 'input',
            name: 'id',
            message: "Please enter the Intern's ID number: ",
            validate: answer => {
                const pass = answer.match(/^[0-9]+$/);
                if (pass) {
                    if (ids.includes(answer)) {
                        return "This ID is already in use! Please try again. ";
                    }
                    else {
                        return true;
                    }
                }
                return "Please enter a valid ID number! ";
            }
        },
        {   // Ask for Intern's email address
            type: 'input',
            name: 'email',
            message: "Please enter the Intern's email address: ",
            validate: answer => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                    return true;
                }
                return "Please enter a valid email address! ";
            }
        },
        {   // Ask for Intern's school
            type: 'input',
            name: 'school',
            message: "Please enter the Intern's school: ",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid school name! ";
            }
        }
    ])
        .then((data) => {
            const intern = new Intern(data.name, data.id, data.email, data.school);
            team.push(intern);
            ids.push(data.id);
            newEmployee();
        });
}
// Invoke Manager function upon program load
newManager();