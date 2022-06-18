const Intern = require ("../lib/Intern.js");

describe("SchoolName", () => {
    it("Can set school name via constructor", () => {
      const testValue = "SchoolName";
      const n = new Intern("Skylar", 123, "email@email.com", testValue);
      expect(n.SchoolName).toBe(testValue);
     });
  
    describe("getRole", () => {
    it("should return \"Intern\"", () => {
      const testValue = "Intern";
      const n = new Intern("Skylar", 123, "email@email.com", "SchoolName");
      expect(n.getRole()).toBe(testValue);
    });
    });
    describe ("getSchoolName", () => {
    it("Can get School name via getSchoolName", () => {
      const testValue = "SchoolName";
      const n = new Intern("Skylar", 123, "email@email.com", testValue);
      expect(n.getSchoolName()).toBe(testValue);
    });  
    });
  });