const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require("./notes.js");

// Customize yargs version number
yargs.version('1.1.0');

// add command
yargs.command({
    command: 'add',
    description: 'add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log(chalk.yellow("Title: ") + argv.title);
        console.log(chalk.blue("Body: ") + argv.body);
    }
})

// remove command
yargs.command({
    command: 'remove',
    description: 'remove a note',
    handler: function(argv){
        console.log("remove a note");
    }
})

// list command
yargs.command({
    command: 'list',
    description: 'list all notes',
    handler: function(){
        console.log("list all the notes");
    }
})

// read command
yargs.command({
    command: 'read',
    description: 'read notes',
    handler: function(){
        console.log("read the notes");
    }
})

yargs.parse();

