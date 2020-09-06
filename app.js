// ======= Const Variables =======
const Inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
// ======= End Const ==============

function Question(type, message, name, choices) {
  this.type = type;
  this.message = message;
  this.name = name;
  this.choices = choices;
}

// array of questions for user
const initialQuestions = [
  new Question("input", "What is the name of your team or group?", "teamName"),
  new Question(
    "input",
    "How many Managers do you want to set up?",
    "managerCount"
  ),
  new Question(
    "input",
    "How many Engineers do you want to set up?",
    "engineerCount"
  ),
  new Question(
    "input",
    "How many Interns do you want to set up?",
    "internCount"
  ),
];

Inquirer.prompt(initialQuestions).then((answers) => {
  var output;

  // Here we use the fs package to read our index.html file
  fs.readFile("./templates/main.html", function (err, data) {
    if (err) throw err;
    console.log(data);
    output = data.replace("~~Team Name~~", answers.teamName);
  });

  

  console.log(output);

  //
});
