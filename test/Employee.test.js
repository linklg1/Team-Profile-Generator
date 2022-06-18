const Employee = require ("../lib/Employee.js");

describe("Employee", () => {
    describe("Initialization", () => {
     
      it("Can instantiate Employee instance", () => {
        const n = new Employee("Trevor", 123, "email@email.com");
        expect(typeof(n)).toBe("object");
        });  
     
        it("should create an employee object with a name, id and email if provided with valid arguments", () => {
            // Creating a new instance to test with valid arguments
            const employee = new Employee("Trevor", 123, "email@email.com");

            expect(employee.name).toEqual("Trevor");
            expect(employee.id).toEqual(123);
            expect(employee.email).toEqual("email@email.com");
        });

        it("should throw an error if provided no arguments", () => {
            // Creating a callback to test invalid arguments and make sure an error is returned
            const callback = () => new Employee();

            expect(callback).toThrowError();
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
            const error = new Error("Expected parameter 'id' to be a non-negative number");
      
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
          const n = new Employee(testValue, 123, "email@email.com");
          expect(n.getName()).toBe(testValue);
      });
  });
      
  describe("getId", () => {
      it("Can get id via getId()", () => {
          const testValue = 123;
          const n = new Employee("Bob", testValue, "email@email.com");
          expect(n.getId()).toBe(testValue);
      });
  });
      
  describe("getEmail", () => {
      it("Can get email via getEmail()", () => {
          const testValue = "email@email.com";
          const n = new Employee("Bob", 123, testValue);
          expect(n.getEmail()).toBe(testValue);
      });
  });
      
  describe("getRole", () => {
      it("getRole() should return \"Employee\"", () => {
          const testValue = "Employee";
          const n = new Employee("Trevor", 123, "email@email.com");
          expect(n.getRole()).toBe(testValue);
      });
  });
  })