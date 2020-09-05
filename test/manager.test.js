const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

describe("Manager", () =>
{
    describe("getName", () =>
    {
        it("should return the name of the Manager", () => {
            const name = "Tom";
            const result = new Manager(1,name,"email").getName();
            
            expect(result).toEqual(name);
        });
    });

    describe("getID", () =>
    {
        it("should return the id of the Manager", () => {
            const id = 1;
            const result = new Manager(id,"Tom","email").getID();

            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () =>
    {
        it("should return the email of the Manager", () => {
            const email = "Tom@TomTom.com";
            const result = new Manager(1,"Tom",email).getEmail();

            expect(result).toEqual(email);
        });
    });

    describe("getRole", () =>
    {
        it("should return the role of the Manager", () => {
            const role = "Manager";
            const result = new Manager(1,"Tom","email").getRole();

            expect(result).toEqual(role);
        });
    });


});