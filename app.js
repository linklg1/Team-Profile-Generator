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
        const ManagerInstance = new Manager (response.name, parseInt(response.id), response.email, parseInt(response.officeNumber))
        teamobjectarray.push(ManagerInstance)
    // call option function here
    addTeamMember();
    })
}

const promptEngineer = () => {
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
          name: 'GitHub',
          message: 'What is your GitHub Username?',
        }   
  ])
  .then(response => {
      const EngineerInstance = new Engineer (response.name, parseInt(response.id), response.email, response.GitHub)
      teamobjectarray.push(EngineerInstance)
      addTeamMember();
  })}

  const promptIntern = () => {
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
            name: 'SchoolName',
            message: 'What is the name of your school?',
          }   
    ])
    .then(response => {
        const InternInstance = new Intern (response.name, parseInt(response.id), response.email, response.SchoolName)
        teamobjectarray.push(InternInstance)
        addTeamMember();
    })}
  

const addTeamMember = () => {
  inquirer.prompt ([
    {
      type: 'list',
      name: 'addteammember',
      message: 'Would you like to add an additional team member?',
      choices: ["Engineer", "Intern", "No thank you"]
    },
  ]) 
  .then (response => {
    if (response.addteammember === "Engineer") {
      promptEngineer();
    }
    else if (response.addteammember === "Intern") {
      promptIntern();
    }
    else {
      init();
    }
  })

}

const init = () => {
    
      // Use writeFileSync method to use promises instead of a callback function
      fs.writeFileSync(htmltoproduct, generator(teamobjectarray))
      console.log('Successfully created html in "product" folder')
      
  };
  
  promptManager();