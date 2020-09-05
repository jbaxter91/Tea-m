const Employee = require("./employee");

class Engineer extends Employee {
    constructor(id, name, email, gitHub) {
        super(id, name, email);
        this.github = gitHub;
        this.role = "Engineer";
    }


    getDisplayData()
    {
      return [`ID: ${this.id}`,`Email: ${this.email}`,`Github: ${this.github}`];
    }

}

var tod = new Employee(1,"Tod Burger","tb@fakenews.com");
var sally = new Engineer(2,"Sally Fields","sfields@fakenews.com","ssfields91");

console.log(`Name: ${tod.getName()} | ID: ${tod.getName()}  |  Email: ${tod.getEmail()}`);
console.log(tod.getDisplayData());
console.log("=============");
console.log(`Name: ${sally.getName()} | ID: ${sally.getName()}  |  Email: ${sally.getEmail()}`);
console.log(sally.getDisplayData());