const Employee = require("./employee");

class Manager extends Employee {
    constructor(id, name, email, officeNum ) {
        super(id, name, email);
        this.officeNum = officeNum;
        this.role = "Manager";
    }


    // getDisplayData()
    // {
    //     return [`ID: ${this.id}`,`Email: ${this.email}`,`Office Number: ${this.officeNum}`];
    // }

}