const Intern = require("../lib/intern");
const Employee = require("../lib/employee");

describe("Intern", () =>
{
    describe("getName", () =>
    {
        it("should return the name of the Intern", () => {
            const name = "Tom";
            const result = new Intern(1,name,"email").getName();
            
            expect(result).toEqual(name);
        });
    });

    describe("getID", () =>
    {
        it("should return the id of the Intern", () => {
            const id = 1;
            const result = new Intern(id,"Tom","email").getID();

            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () =>
    {
        it("should return the email of the Intern", () => {
            const email = "Tom@TomTom.com";
            const result = new Intern(1,"Tom",email).getEmail();

            expect(result).toEqual(email);
        });
    });

    describe("getRole", () =>
    {
        it("should return the role of the Intern", () => {
            const role = "Intern";
            const result = new Intern(1,"Tom","email").getRole();

            expect(result).toEqual(role);
        });
    });


});