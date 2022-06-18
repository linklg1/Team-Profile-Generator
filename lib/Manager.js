// Defining Manager subclass
const { number } = require("yargs");
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
        if (officeNumber < 0) {
            throw Error("Expected parameter 'OfficeNumber' to be a non-negative number")
                }
        if (typeof officeNumber !== "number") {
            throw Error("Expected parameter 'OfficeNumber' to be a number")
        }        
    }
getofficeNumber(){
    return this.officeNumber;
}
getRole(){
    return this.role;
}

}


module.exports = Manager;
