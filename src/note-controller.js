(function (exports) {

  function NoteController(notelistview = new NoteListView(new NoteList())){
    this.noteListView = notelistview
  }

  NoteController.prototype.createNote = function(text){
    this.noteListView.noteListModel.createAndStoreNote(text)
  }

  NoteController.prototype.renderHTML = function() {
    elem = document.getElementById('app')
    elem.innerHTML = this.noteListView.noteListModelToHTML()
  }

  NoteController.prototype.specificNote = function(noteid){
    return this.noteListView.noteListModel.returnAllNotes()[noteid]
  }

  NoteController.prototype.makeUrlChangeShowSingleNote = function(){
    var self = this
    window.addEventListener("hashchange", function(){
      var noteId = window.location.hash.split('#')[1]
      var noteObject = self.specificNote(noteId)
      var singleNoteView = new SingleNoteView(noteObject)
      document.getElementById('app').innerHTML = singleNoteView.noteTextToHTML()
    });
  }

  exports.NoteController = NoteController;
})(this);
//

var notecontroller = new NoteController()
notecontroller.createNote('Hello I am a student at Makers Academy and its really expensive')

notecontroller.createNote('Hello Oleg')

notecontroller.renderHTML()

notecontroller.makeUrlChangeShowSingleNote()
// window.addEventListener("hashchange", function(){
//       var noteId = window.location.hash.split('#')[1]
//       var noteObject = notecontroller.specificNote(noteId)
//       var singleNoteView = new SingleNoteView(noteObject)
//       document.getElementById('app').innerHTML = singleNoteView.noteTextToHTML()
//     });
//
  //
  // NoteController.prototype.showNoteOnePage = function(){
  //   noteid = this.getNoteIdFromHash(window.location)
  // }
  //
  // NoteController.prototype.getNoteIdFromHash = function (url) {
  //   return url.hash.split('#')[1]
  // }
