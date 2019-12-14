const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require("./notes.js");

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
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
})

// remove command
yargs.command({
    command: 'remove',
    description: 'remove a note',
    builder: {
        title: {
            describe: 'title of the note to delete',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

// list command
yargs.command({
    command: 'list',
    description: 'list all notes',
    handler(){
        console.log("list all the notes");
    }
})

// read command
yargs.command({
    command: 'read',
    description: 'read notes',
    handler(){
        console.log("read the notes");
    }
})

yargs.parse();

