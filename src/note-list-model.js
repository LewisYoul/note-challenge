(function (exports) {

  function NoteList (note = Note) {
    this.notes = []
    this.noteClass = note
    this._noteCount = 0
  }

  NoteList.prototype.returnAllNotes = function () {
    return this.notes
  }

  NoteList.prototype.createAndStoreNote = function (text) {
    this.notes.push(new this.noteClass(text, this._noteCount))
    this._noteCount++;
  }

  exports.NoteList = NoteList;
})(this);
