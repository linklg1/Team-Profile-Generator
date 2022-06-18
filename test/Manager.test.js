const Manager = require ("../lib/Manager.js");
const Employee = require("../lib/Employee.js");

describe("OfficeNumber", () => {
    it("Can set Office Number via constructor", () => {
      const testValue = 607;
      const n = new Manager("Sandy", 123, "email@email.com", testValue);
      expect(n.officeNumber).toBe(testValue);
     });
  
     it("should throw a specific error if 'OfficeNumber' is not a number", () => {
        const callback = () => new Manager("Sandy", 222, "email@email.com", "34");
        const error = new Error("Expected parameter 'OfficeNumber' to be a number");
  
        expect(callback).toThrowError(error);
      });
  
      it("should throw a specific error if 'OfficeNumber' is less than 0", () => {
        const callback = () => new Manager("Sandy", 234, "email@email.com", -1);
        const error = new Error("Expected parameter 'OfficeNumber' to be a non-negative number");
  
        expect(callback).toThrowError(error);
      });


    describe("getRole", () => {
    it("should return \"Manager\"", () => {
      const testValue = "Manager";
      const n = new Manager("Sandy", 123, "email@email.com", 456);
      expect(n.getRole()).toBe(testValue);
    });
    });
    describe ("getOfficeNumber", () => {
    it("Can get Office Number via getOfficeNumber()", () => {
      const testValue = 456;
      const n = new Manager("Tyler", 123, "email@email.com", testValue);
      expect(n.getofficeNumber()).toBe(testValue);
    });  
    });
  });