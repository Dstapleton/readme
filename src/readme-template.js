const generateReadme = (title, github) => {
    return `
# ${title}
[Github link](https://github.com/${github})
    `;
};
module.exports = generateReadme;