const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generator = require("./lib/generator.js");
const pathtoproduct = path.resolve(__dirname,"product");
const htmltoproduct = path.join(pathtoproduct, "team.html");
const teamobjectarray = [];




const promptManager = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
          },
          {
            type: 'input',
            name: 'id',
            message: 'What is your employee id number?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
          },
          {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
          }   
    ])
    .then(response => {
        const ManagerInstance = new Manager (response.name, response.id, response.email, response.officeNumber)
        teamobjectarray.push(ManagerInstance)
    // call option function here (create option function elsewhere fire init when they say no)
    init();
    })
}
// need another couple functions with inquirer 
//prompt that asks if you want to add an engineer or intern for the .then it 
//will run init if they select no and it will run following prompts if they select yes
//typ list name addteammate message do you want to add a team mate > options would be add engineer add intern or no thank you
// .then(response => { if (response.addteammate === add engineer) {promptengineer ();}})








const init = () => {
    
      // Use writeFileSync method to use promises instead of a callback function
      fs.writeFileSync(htmltoproduct, generator(teamobjectarray))
      console.log('Successfully created html in "product" folder')
      
  };
  
  promptManager();