const validator = require('validator');
const chalk = require('chalk');
const getNotes = require("./notes.js");

let notes = getNotes();

// let isEmail = validator.isEmail("naidu.adarsh@Speec.com");

let printIsEmail = function(email){
    console.log(chalk.yellow(email) + " " + (validator.isEmail(email)?chalk.green("true") : chalk.red("false")));
}

printIsEmail("da.dasr@g.edu.com");