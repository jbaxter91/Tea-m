const Employee = require("./employee");

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
        this.role = "Intern";
    }

    
    getDisplayData()
    {
      return [`ID: ${this.id}`,`Email: ${this.email}`,`School: ${this.school}`];
    }

}