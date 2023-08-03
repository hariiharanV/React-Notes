
import NotesList from './components/NotesList'
import {nanoid} from 'nanoid'
import {useState, useEffect} from 'react'
import SearchBar from './components/SearchBar'
import Header from './components/Header'
import EditNote from './components/EditNote'

function App({newNote}) {
 
  const [notes,setNotes] = useState(()=>{

      const notes = localStorage.getItem("notes");

      if(notes==null) return []


      return JSON.parse(notes);

  })

  const [searchText,setSearchText] = useState('')
  const [darkMode,setDarkMode] = useState(false)
  const [edit,setEdit] = useState({show:false,text:'',id:''})

  useEffect(()=>{

    localStorage.setItem("notes",JSON.stringify(notes))

  },[notes])

  function getNewNote(note)
  {
    if(note.trim().length >0)
    {
      const date = new Date();
      const newNote = {
        id:nanoid(),
        text:note,
        date:date.toLocaleDateString()
      }
      setNotes((currNote)=>{
        return [...currNote,newNote];
      })
    }
  }

function deleteNote(id)
{
  setNotes((curNote)=>{
    console.log('inside delete')
    return curNote.filter(note =>{
      return note.id !== id;
    })
  })
}

function setToggle(value)
{
  setDarkMode((currVal)=>{
    return !currVal
  });

}

// const filteredNotes = notes.filter((note) =>
// note.text.toLowerCase().includes(searchText.toLowerCase())
// );

    

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header toggle={setToggle} changeHeader={darkMode}/>
        <SearchBar changeHandler={setSearchText}/>
        <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase())
          )} newNote={getNewNote} deleteHandler={deleteNote} editHandler2={(val,text,id)=>setEdit((curedit)=>{
            return {show:val,text:text,id:id}
          })}/>
          <EditNote show={edit.show} id={edit.id} setNotes={setNotes} notes={notes} handleClose={()=>
            setEdit((currEdit)=>{
              return {...currEdit,show:false};
            })}/>
        </div>
    </div>
  )
}

export default App
