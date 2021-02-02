# Template Engine: Employee Summary

## Description
This project is designed to allow a user to build a software engineering team generator command line application. This will prompt the user (manager) to input all information about their team members. This will then generate a webpage that displays the team's basic information and will allow the manager to have quick access to their emails and GitHub profiles. The application asks the user to input the employee's name, ID, email, and a specific question depending on their role. The application is rendered by collecting this information, adding it to the HTML templates, then combined and output to one HTML webpage displaying all information

## Usage
This project requires node.js. You would have to install node modules by running the code 'npm init' in your terminal or GitBash. 
After this you would have to install the dependencies, which include inquirer and jest (use 'npm i jest' and 'npm i inquirer'). These are not in this repository due to security reasons, and thats why they're excluded in the .gitignore file - to avoid tracking or uploading these files to GitHub. Once these are installed, you are ready to run the code by typing 'node app.js' in the CLI which will output the series of prompts that will store it into their employee constructors, to then generate the team's information webpage. Throughout the questions, feedback will be provided based on the user's input through a validation check. If the user enters an empty string, same ID as another employee, or invalid email, they will get a feedback message pointing out the issue. Jest is then used to ensure the application passes all unit tests. You can use 'npm run test' to view the tests and results. 

## Examples
Here is a walkthrough video and an example of the generated team file created by the application in this repository. 
[Link to the video](https://youtu.be/S-pPJt5j5w0)
![demo](https://user-images.githubusercontent.com/73862470/106549841-cfb28580-64df-11eb-97d5-90c937008d66.PNG)


## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions
You can reach me at my email matthewguillen777@gmail.com </br>
Link to repository: https://github.com/GuilleMGN/TemplateEngine
