// (function (exports) {
//       var note = new Note('My favourite language is JavaScript');
//
//       if (note.text !== 'My favourite language is JavaScript') {
//         throw("Text doesn't match")
//       }
//   }
//   testTextOfNote()
// })(this);


function testTextOfNote() {
  var note = new Note('My favourite language is JavaScript')
  assert.isTrue(note.text === 'My favourite language is JavaScript')
}

testTextOfNote()

function testReturnText() {
  var note = new Note('My favourite language is JavaScript')
  assert.isTrue(note.returnText() === 'My favourite language is JavaScript')
}

testReturnText()
