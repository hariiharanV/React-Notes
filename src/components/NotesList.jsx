import AddNote from './AddNote'
import Note from './Note'

function NotesList({notes,newNote, deleteHandler, editHandler2}) {
  return (
    <>
    <div className="notesList">
        { notes.map((note)=>{ 
           return  <Note key={note.id} id={note.id} text={note.text} date={note.date} deleteNote={deleteHandler} editHandler={editHandler2}/>
        })}
        <AddNote getNewNote={newNote}/>
    </div>
    </>
  )
}

export default NotesList