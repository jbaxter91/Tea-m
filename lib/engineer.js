const Employee = require("./employee");

// Engineer class inherits from employee and has extra constructor for "gitHub"
class Engineer extends Employee {
    constructor(id, name, email, gitHub) {
        super(id, name, email);
        this.gitHub = gitHub;
        this.role = "Engineer";
    }
}

module.exports = Engineer;
