// store user input
const profileData = process.argv.slice(2,process.argv.length);

const printProfileData = profileDataArray => {
    profileDataArray.forEach(element => console.log(element));
}

// print user input
printProfileData(profileData);