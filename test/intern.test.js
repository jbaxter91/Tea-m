const Intern = require("../lib/intern");
const Employee = require("../lib/employee");

describe("Intern", () =>
{
    describe("getName", () =>
    {
        it("should return the name of the Intern", () => {
            const name = "Tom";
            const result = new Intern(1,name,"email","UCD").getName();
            
            expect(result).toEqual(name);
        });
    });

    describe("getID", () =>
    {
        it("should return the id of the Intern", () => {
            const id = 1;
            const result = new Intern(id,"Tom","email","UCD").getID();

            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () =>
    {
        it("should return the email of the Intern", () => {
            const email = "Tom@TomTom.com";
            const result = new Intern(1,"Tom",email,"UCD").getEmail();

            expect(result).toEqual(email);
        });
    });

    describe("getRole", () =>
    {
        it("should return the role of the Intern", () => {
            const role = "Intern";
            const result = new Intern(1,"Tom","email","UCD").getRole();

            expect(result).toEqual(role);
        });
    });

    describe("getSchool", () =>
    {
        it("should return the school of the Intern", () => {
            const school = "UCD";
            const result = new Intern(1, "Tom", "email", school).getSchool();

            expect(result).toEqual(school);
        });
    });


});