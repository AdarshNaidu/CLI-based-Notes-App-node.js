const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    }else console.log(chalk.red.inverse('Note title taken'));

   
}

const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length == notesToKeep.length) console.log(chalk.red.inverse("Note not found!!"));
    else {
        console.log(chalk.green.inverse("Note removed successfully!!"));
        saveNotes(notesToKeep);
    }
}

const listNotes = () => {
    let notes = loadNotes();
    console.log(chalk.yellow("~~~~~~Your Notes~~~~~~"))
    
    notes.forEach((note) => {
        console.log(chalk.cyan(note.title));
    })
}

const readNote = (title) => {
    let notes = loadNotes();
    let note = notes.find((note) => note.title == title);

    if(note){
        console.log(chalk.yellow(note.title));
        console.log(chalk.cyan(note.body));
    }else console.log(chalk.red.inverse('Note note found'));
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data;
    }catch(e){
        return [];
    } 
}

//lgtm bot test
const bot
if (false) console.log(test);

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
