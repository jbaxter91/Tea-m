const Employee = require("./employee");

// Engineer class inherits from employee and has extra constructor for "gitHub"
class Engineer extends Employee {
    constructor(id, name, email, gitHub) {
        super(id, name, email);
        this.gitHub = gitHub;
        this.role = "Engineer";
    }


    // getDisplayData()
    // {
    //   return [`ID: ${this.id}`,`Email: ${this.email}`,`GitHub: ${this.gitHub}`];
    // }

}

var tod = new Employee(1,"Tod Burger","tb@fakenews.com");
var sally = new Engineer(2,"Sally Fields","sfields@fakenews.com","ssfields91");

console.log(`Name: ${tod.getName()} | ID: ${tod.getName()}  |  Email: ${tod.getEmail()}  |  Role: ${tod.role}`);
console.log("=============");
console.log(`Name: ${sally.getName()} | ID: ${sally.getName()}  |  Email: ${sally.getEmail()}  |  Role: ${sally.role}`);