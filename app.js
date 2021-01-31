const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const ids = [];
const team = [];
newEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Which Team Member would you like to add? ',
            choices: [
                'Engineer',
                'Intern',
                'None of the above'
            ]
        }
    ])
        .then((data) => {
            switch (data.role) {
                case 'Engineer':
                    newEngineer();
                    break;
                case 'Intern':
                    newIntern();
                    break;
                // After the user has input all employees desired, call the `render` function (required
                // above) and pass in an array containing all employee objects; the `render` function will
                // generate and return a block of HTML including templated divs for each employee!
                case 'None of the above':
                    createTeam();
                    break;
            }
        });
}
createTeam = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(team), "utf8")
}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
newManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Manager's name: ",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a name";
            } 
        },
        {
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
        {
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
        {
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
newEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Engineer's name: "
        },
        {
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
        {
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
        {
            type: 'input',
            name: 'github',
            message: "Please enter the Engineer's GitHub username: "
        },
    ])
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            team.push(engineer);
            newEmployee();
        });
}
newIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Intern's name: "
        },
        {
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
        {
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
        {
            type: 'input',
            name: 'school',
            message: "Please enter the Intern's school: "
        }
    ])
        .then((data) => {
            const intern = new Intern(data.name, data.id, data.email, data.school);
            team.push(intern);
            newEmployee();
        });
}

newManager();

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

