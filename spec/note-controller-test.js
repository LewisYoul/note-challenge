
// DOUBLES

function DoubleNoteListView(doublenotelistclass){
  this.noteListModel = doublenotelistclass
}
DoubleNoteListView.prototype.noteListModelToHTML = function(){
  return '<ul><li><div>test note</div></li></ul>'
}

function DoubleNoteList(noteclass){
  this.notes = noteclass
}
DoubleNoteList.prototype.returnAllNotes = function(){
  return this.notes
}

function DoubleNote(text, id = 0){
  this.text = text
  this.id = id
}

// TESTS

describe('returns note object that has corresponding ID', function(){
  var doubleNote = new DoubleNote('hello')
  var noteController = new NoteController(new DoubleNoteListView(new DoubleNoteList([doubleNote])))
  console.log(noteController)
  return assert.isTrue(noteController.specificNote(0) === doubleNote)
});

describe('checks that notecontroller is instantiated', function(){
  return assert.isTrue(new NoteController() instanceof NoteController)
});

describe('checks that HTML is rendered to page', function(){
  var noteListController = new NoteController(new DoubleNoteListView(new DoubleNoteList()))
  elem = document.getElementById('app')
  noteListController.renderHTML()
  return assert.isTrue(elem.innerHTML === '<ul><li><div>test note</div></li></ul>')
});
