//Defining Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";

        if (typeof name !== "string") {
            throw Error ("Expected parameter 'name' to be a non-empty string")
        }

        if (typeof id !== "number") {
                throw Error("Expected parameter 'id' to be a non-negative number")
            }
        if (id < 0) {
            throw Error("Expected parameter 'id' to be a non-negative number")
        }
        if (typeof email !== "string") {
            throw Error("Expected parameter 'email' to be a non-empty string")
        }

    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role
    }

}

module.exports = Employee;
