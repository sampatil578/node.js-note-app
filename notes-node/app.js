// console.log('starting app.js');

const fs = require('fs');
// const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs
.command('add','Add a new Note',{
  title:{
    describe:'Title of note',
    demand:'true',
    alias:'t'
  },
  body:{
    describe:'Body of note',
    demand:'true',
    alias:'b'
  }
})
.command('list','Lists all Notes')
.command('read','Reads a note with given Title',{
  title:{
    describe:'Title of note',
    demand:'true',
    alias:'t'
  }
})
.command('remove','removes a given note',{
  title:{
    describe:'Title of note',
    demand:'true',
    alias:'t'
})
.help()
.argv;

var command = argv._[0];
// console.log('Command: ', command);
// console.log('yargs', argv);

if(command == 'add'){
  var note = notes.addNote(argv.title,argv.body);
  if(note){
    console.log('Note Created');
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`body: ${note.body}`);
  }
  else{
    console.log('Title taken already');
  }
  // console.log('Adding new note');
}else if(command == 'list'){
  // console.log('listing notes');
  var allNotes = notes.getAll();
  console.log(`printing ${allNotes.length} notes`);
  allNotes.forEach((note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  });
}else if(command == 'read'){
  // console.log('reading all notes');
  var note = notes.getNote(argv.title);
  if(note){
    console.log('note found');
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  }else{
    console.log('note not found');
  }
}else if(command == 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  if(noteRemoved){
    console.log('note removed');
  }else{
    console.log('note does not exist');
  }
}else{
  console.log('command not found');
}
//
// var filteredarray = _.uniq(['sammy']);
// console.log(filteredarray);

// console.log(_.isString(true));
// console.log(_.isString("samruddha"));

// var user = os.userInfo();

// var res = notes.add(9,-2);
// console.log(res);
// fs.appendFile('greetings.txt',`Hello ${user.username} you are ${notes.age}` ,function (err) {
//   if(err){
//     console.log('unable to write to file');
//   }
// });
