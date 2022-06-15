const Employee = require ("../lib/Employee.js");

describe("Employee", () => {
    describe("Initialization", () => {
     
      it("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
        });  
     
        it("should create an employee object with a name, id and email if provided with valid arguments", () => {
            // Creating a new instance to test with valid arguments
            const Employee = new Employee("Trevor", 123, "email@email.com");

            expect(Employee.name).toEqual("Trevor");
            expect(Employee.id).toEqual(123);
            expect(Employee.email).toEqual("email@email.com");
        });

        it("should throw an error if provided no arguments", () => {
            // Creating a callback to test invalid arguments and make sure an error is returned
            const callback = () => new Employee();

            expect(callback).toThrow();
        });

        it("should throw a specific error if 'name' is not a string", () => {
            const callback = () => new Employee(44, 123, "email@email.com");
            const error = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(callback).toThrowError(error);
          });

        it("should throw a specific error if not provided an id", () => {
            // Creating a callback to test an error
            const callback = () => new Employee("Bob", "email@email.com");

            const error = new Error("Expected parameter 'id' to be a non-negative number");

            expect(callback).toThrowError(error);
        });

        it("should throw a specific error if 'id' is not a number", () => {
            const callback = () => new Employee("Robert", "2", "email@email.com");
            const error = new Error("Expected parameter 'id' to be a number");
      
            expect(callback).toThrowError(error);
          });
      
          it("should throw a specific error if 'id' is less than 0", () => {
            const callback = () => new Employee("Robert", -1, "email@email.com");
            const error = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(callback).toThrowError(error);
          });

          it("should throw a specific error if 'email' is not a string", () => {
            const callback = () => new Employee("Rob", 123, 456);
            const error = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(callback).toThrowError(error);
          });

    })


  describe("getName", () => {
      it("Can get name via getName() function", () => {
          const testValue = "Trevor";
          const e = new Employee(testValue);
          expect(e.getName()).toBe(testValue);
      });
  });
      
  describe("getId", () => {
      it("Can get id via getId()", () => {
          const testValue = 123;
          const e = new Employee("Bob", testValue);
          expect(e.getId()).toBe(testValue);
      });
  });
      
  describe("getEmail", () => {
      it("Can get email via getEmail()", () => {
          const testValue = "email@email.com";
          const e = new Employee("Bob", 123, testValue);
          expect(e.getEmail()).toBe(testValue);
      });
  });
      
  describe("getRole", () => {
      it("getRole() should return \"Employee\"", () => {
          const testValue = "Employee";
          const e = new Employee("Trevor", 123, "email@email.com");
          expect(e.getRole()).toBe(testValue);
      });
  });
  })