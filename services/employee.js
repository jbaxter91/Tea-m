class Employee {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.role = "Employee";
    }
  

  getName()
  {
    return this.name;
  }

  getId()
  {
    return this.id;
  }

  getEmail()
  {
    return this.email;
  }

  getRole()
  {
    return this.role;
  }

  getDisplayData()
  {
    return [`ID: ${this.id}`,`Email: ${this.email}`];
  }
}
  
  module.exports = Employee;