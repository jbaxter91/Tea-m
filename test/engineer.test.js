const Engineer = require("../lib/engineer");
const Employee = require("../lib/employee");

describe("Engineer", () =>
{
    describe("getName", () =>
    {
        it("should return the name of the Engineer", () => {
            const name = "Tom";
            const result = new  Engineer(1,name,"email").getName();
            
            expect(result).toEqual(name);
        });
    });

    describe("getID", () =>
    {
        it("should return the id of the Engineer", () => {
            const id = 1;
            const result = new Engineer(id,"Tom","email").getID();

            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () =>
    {
        it("should return the email of the Engineer", () => {
            const email = "Tom@TomTom.com";
            const result = new Engineer(1,"Tom",email).getEmail();

            expect(result).toEqual(email);
        });
    });

    describe("getRole", () =>
    {
        it("should return the role of the Engineer", () => {
            const role = "Engineer";
            const result = new Engineer(1,"Tom","email").getRole();

            expect(result).toEqual(role);
        });
    });


});