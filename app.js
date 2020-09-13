// ======= Const Variables =======
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const render = require("./lib/htmlRenderer");
// ======= End Const ==============

async function init() {
  // Figures out how many times to loop the questions
  const answer = await inquirer.prompt([
    {
      type: "input",
      message: "What is your team name?",
      name: "teamName",
    },
    {
      type: "input",
      message: "How many team members are working on this project?",
      name: "numMembers",
    },
  ]);

  console.log(
    `\nThere are ${answer.numMembers} member of this team. Please give information about each member.\n`
  );
  //Initialize members array
  let members = [];

  // Loops one time for each member
  for (let i = 0; i < answer.numMembers; i++) {
    const response = await inquirer.prompt([
      {
        type: "input",
        message: "Please insert your name",
        name: "name",
      },
      {
        type: "input",
        message: "Please insert your employee id",
        name: "id",
      },
      {
        type: "input",
        message: "Please insert your email",
        name: "email",
      },
      {
        type: "list",
        message: "Please indicate your role in this project",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
        when: (answers) => answers.role === "Manager",
      },
      {
        type: "input",
        message: "What is your Github username?",
        name: "github",
        when: (answers) => answers.role === "Engineer",
      },
      {
        type: "input",
        message: "What is the name of your academic institution?",
        name: "school",
        when: (answers) => answers.role === "Intern",
      },
    ]);

    //We now want to push the members
    switch (response.role) {
      case "Manager":
        members.push(
          new Manager(
            response.id,
            response.name,
            response.email,
            response.officeNumber
          )
        );
        break;
      case "Engineer":
        members.push(
          new Engineer(
            response.id,
            response.name,
            response.email,
            response.github
          )
        );
        break;
      case "Intern":
        members.push(
          new Intern(
            response.id,
            response.name,
            response.email,
            response.school
          )
        );
        break;
    }
  }

  // Creates a txt file in JSON format
  fs.writeFile(
    "./output/members.txt",
    JSON.stringify(members, null, 4),
    (err) => {
      if (err) {
        throw err;
      }
      console.log(
        "Text file of member info has been created in JSON format in the 'output' directory\n"
      );
      render(members);
    }
  );
  // Creates the HTML file
  fs.writeFile("./output/team.html", render(members), (err) => {
    if (err) {
      throw err;
    }
    console.log(
      "HTML file of member info has been created in the 'output' directory\n"
    );
  });
}

init();
