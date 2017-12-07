// Note Double
function DoubleNote(text, id){
  this.text = text
  this.id = id
}

// Note List Double
function DoubleNoteList(notes) {
  this.notes = notes
}

DoubleNoteList.prototype = {
  returnAllNotes: function () {
    return this.notes
  }
}

// TESTS

describe('converts notelist to HTML', function(){
  var noteListView = new NoteListView(new DoubleNoteList([new DoubleNote('hello', 1)]))
  return assert.isTrue(noteListView.noteListModelToHTML() === '<ul><li><div><a href="#1">hello</a></div></li></ul>')
});

describe('trims a string to 20 characters', function(){
  var noteListView = new NoteListView(new DoubleNoteList([new DoubleNote('the quick brown dog jumped over the lazy fox', 45)]))
  return assert.isTrue(noteListView.noteListModelToHTML() === '<ul><li><div><a href="#45">the quick brown dog </a></div></li></ul>')
});

describe('a new note can be displayed as a link with a hash', function () {
  var noteListView = new NoteListView(new NoteList());
  noteListView.noteListModel.createAndStoreNote('hello world')
  var HTMLstring = '<ul><li><div><a href="#0">hello world</a></div></li></ul>'
  return assert.isTrue(noteListView.noteListModelToHTML() === HTMLstring)
})

// describe('whole note is displayed', function () {
//   var noteListView = new NoteListView(new NoteList());
//   noteListView.noteListModel.createAndStoreNote('the quick brown fox jumped over the laxy dog')
//
//
// })
