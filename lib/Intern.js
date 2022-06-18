// Defining intern subclass
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, SchoolName){
        super(name, id, email);
        this.GitHub = GitHub;
        this.role = "Intern";
    }
    getSchoolName(){
        return this.SchoolName;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Intern;