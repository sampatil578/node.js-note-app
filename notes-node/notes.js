// console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try{
  notesString = fs.readFileSync('notes-data.json');
  return JSON.parse(notesString);
  } catch(e){
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title,body) => {
  var notes = fetchNotes();
  var note =
  {
    title,
    body
  };
var duplicateNotes = notes.filter((note)=> note.title===title);
if(duplicateNotes.length===0){
  notes.push(note);
  saveNotes(notes);
  return note;
}
};
var getAll = () => {
  // console.log('Getting All Notes');
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNote = notes.filter((note)=> note.title===title);
  return filteredNote[0];
};

var removeNote = (title) => {
  console.log('removing note');
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note)=> note.title!==title);
  saveNotes(filteredNotes);

  return notes.length!==filteredNotes.length;

};

module.exports = {
  addNote,
  removeNote,
  getAll,
  getNote
};

// module.exports.add = (a,b) => {
//   c=a+b;
//   return c;
// };
