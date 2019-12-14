const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    const notes = loadNotes();
    return notes;
}

const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    }else console.log(chalk.red.inverse('Note title taken'));

   
}

const removeNote = function(title){
    const notes = loadNotes();
    // notes.forEach((note, i) => {
    //     if(note.title === title){
    //         notes.splice(i, 1);
    //         console.log(`Note titled "${title}" deleted`)
    //     }else if(i == notes.length-1) console.log(`Note titled "${title}" not found`);
    // });
    // saveNotes(notes);


    const notesToKeep = notes.filter(function(note){
        return note.title !== title;
    })

    if(notes.length == notesToKeep.length) console.log(chalk.red.inverse("Note not found!!"));
    else {
        console.log(chalk.green.inverse("Note removed successfully!!"));
        saveNotes(notesToKeep);
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data;
    }catch(e){
        return [];
    } 
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}