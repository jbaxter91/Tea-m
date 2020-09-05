const Employee = require("../lib/employee");

describe("Employee", () =>
{
    describe("getName", () =>
    {
        it("should return the name of the employee", () => {
            const name = "Tom";
            const result = new Employee(1,name,"email").getName();
            
            expect(result).toEqual(name);
        });
    });

    describe("getID", () =>
    {
        it("should return the id of the employee", () => {
            const id = 1;
            const result = new Employee(id,"Tom","email").getID();

            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () =>
    {
        it("should return the email of the employee", () => {
            const email = "Tom@TomTom.com";
            const result = new Employee(1,"Tom",email).getEmail();

            expect(result).toEqual(email);
        });
    });

    describe("getRole", () =>
    {
        it("should return the role of the employee", () => {
            const role = "Employee";
            const result = new Employee(1,"Tom","email").getRole();

            expect(result).toEqual(role);
        });
    });


});