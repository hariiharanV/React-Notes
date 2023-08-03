import {useState} from 'react'


function AddNote({getNewNote}) {

    const[newNote,setNewNote] = useState('')

    const limit = 200;

    function getNote(e)
    {
        if(newNote.length<limit)
        {
             setNewNote(e.target.value)
        }
    }

    function clickHandler()
    {
      //  setNewNote((note)=>{
      //   return addNewLineAfter167Chars(note);
      //  })
        getNewNote(newNote)
        setNewNote('')
    }


  return (
    <div className="add note mt-2">
        <textarea rows="6" cols="8" onChange={getNote} value={newNote} placeholder=" New Note Goes here !"/>
        <div className="note-footer">
            <small>{limit - newNote.length} remaining</small>
            <button type="submit" onClick={clickHandler} className="save">save</button>
        </div>
        </div>
  )
}

export default AddNote