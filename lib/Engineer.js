//Defining Engineer subclass

const Employee = require("./Employee.js")

class Engineer extends Employee {
    constructor(name, id, email, GitHub){
        super(name, id, email);
        this.GitHub = GitHub;
        this.role = "Engineer";
    }
    getGitHub(){
        return this.GitHub;
    }
    getRole(){
        return this.role;
    }
}


module.exports = Engineer;
