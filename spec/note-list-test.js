// DOUBLES
function DoubleNote(text, id = 0){
  this.text = text
  this.id = id
}

// TESTS

describe('checks that it instantiates with an empty array', function(){
  var noteList = new NoteList();
  return assert.isTrue(noteList.notes.length === 0)
});

describe('checks that create and store note adds the note to array', function(){
  var noteList = new NoteList(DoubleNote);
  noteList.createAndStoreNote()
  return assert.isTrue(noteList.notes[0] instanceof DoubleNote)
});

describe('ID is incremented and assigned to a Note on creation', function () {
  var noteList = new NoteList(DoubleNote)
  noteList.createAndStoreNote('hi')
  noteList.createAndStoreNote('hello')
  noteList.createAndStoreNote('hello world')
  return assert.isTrue(noteList.returnAllNotes()[2].id === 2)
})

describe('checks getter method returns array', function(){
  var noteList = new NoteList(DoubleNote)
  return assert.isTrue(noteList.returnAllNotes() instanceof Array)
});
