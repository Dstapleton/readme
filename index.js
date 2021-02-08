const inquirer = require("inquirer")
/*const fs = require("fs");
const generateReadme= require("./src/readme-template");//readme template
const generateHtml = require("./src/page-template.js");// html template
// store user input
const profileData = process.argv.slice(2,process.argv.length);
const [file_type,name_,github_] = profileData;

const createDocument = (filetype, username, githublink) =>{
    if (filetype === "readme") {
        fs.writeFile("./test/index.md", generateReadme(username,githublink), err=>{
            if (err) throw new Error(err);
        });
        console.log("Readme complete!");
    }
    else if (filetype === "profile") {
        fs.writeFile("./test/index.html", generateHtml(username,githublink), err=>{
            if (err) throw new Error(err);
        });
        console.log("Portfolio complete!");
    }
};


//
createDocument(file_type, name_, github_);
*/
const promptUser = () =>{
    return inquirer.prompt([
        {
            type:"input",
            name:"name",
            message: "What is you name? (Required)",
            validate:nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please Enter Your Name");
                    return false;
                }
            }
        },
        {
            type:"input",
            name:"github",
            message:"Enter your GitHub user username",
            validate:nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please Proviede Your Github User Name");
                    return false;
                }
            }
        },
        {
            type:"confirm",
            name:"confirmAbout",
            message:'Would you like to enter some infomation about yourself for an "About" section?',  
            default: true
        },
        {
            type:"input",
            name:"about",
            message:'Provide some infomation about yourself',
            when: ({confirmAbout}) => {
                if (confirmAbout) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type:"input",
            name:"about",
            message:"Provide a bit about yourself"
        }
    ]);
};
const promptProject = portfolioData => {

    if (!portfolioData.projects){
        portfolioData.projects = [];
    }
    console.log(`
=================
Add a new project
=================
    `);
    return inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the name of your project",
            validate:nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please Enter Your Project Name");
                    return false;
                }
            }
        },
        {
            type:"input",
            name:"description",
            message:"Provide a discription of the project (Required)",
            validate:nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please Give A Brief Discription Of Your Project");
                    return false;
                }
            }
        },
        {
            type:"checkbox",
            name:"languages",
            message:"What did you build this project with? (Check all that apply)",
            choices:['JavaScript', "HTML", "CSS", "ES6", "jQuery", "Boothstrap", "Node"]
        },
        {
            type:"input",
            name:"link",
            message:"Enter the GitHub link to your Project. (Required)",
            validate:nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please Enter The Link To Your GitHub Account");
                    return false;
                }
            }
        },
        {
            type:"confirm",
            name:"feature",
            message:"Would you like to feature this project?",
            default: false

        },
        {
            type:"confirm",
            name:"confirmAddProject",
            message:"Would you like to add another projects",
            default: false

        }
    ])
    .then(projectdata => {
        portfolioData.projects.push(projectdata);
        if (projectdata.confirmAddProject) {
            return promptProject(portfolioData);
        }
        else {
            return portfolioData;
        }
    });

}

promptUser()
    .then(promptProject)
    .then(portfolioData=> console.log(portfolioData));
