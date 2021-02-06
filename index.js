const fs = require("fs");
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
