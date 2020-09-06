const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

describe("Manager", () =>
{
    describe("getName", () =>
    {
        it("should return the name of the Manager", () => {
            const name = "Tom";
            const manager = new Manager(1,name,"email",5);
            const result = manager.getName();
            
            expect(result).toEqual(name);
        });
    });

    describe("getID", () =>
    {
        it("should return the id of the Manager", () => {
            const id = 1;
            const result = new Manager(id,"Tom","email",5).getID();

            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () =>
    {
        it("should return the email of the Manager", () => {
            const email = "Tom@TomTom.com";
            const result = new Manager(1,"Tom",email,5).getEmail();

            expect(result).toEqual(email);
        });
    });

    describe("getRole", () =>
    {
        it("should return the role of the Manager", () => {
            const role = "Manager";
            const result = new Manager(1,"Tom","email",5).getRole();

            expect(result).toEqual(role);
        });
    });

    describe("getOfficeNumber", () =>
    {
        it("should return the Office Number of the Manager", () => {
            const officeNumber = 5;
            const result = new Manager(1,"Tom","email", officeNumber).getOfficeNumber();

            expect(result).toEqual(officeNumber);
        });
    });


});