import {Modal,Form,Button} from 'react-bootstrap'
import {useState, useEffect} from 'react'

export default function EditNote({show,handleClose,id,setNotes,notes}) {

    const [currentNote,setCurrentNote] = useState({text:""})

    useEffect(()=>{

       const req_note = notes.filter((note)=>{
        return note.id == id;
       })

    if(req_note[0])
    {
       setCurrentNote({text:req_note[0].text})

    }
       console.log(currentNote)
         

    },[show])

    function textUpdate(e)
    {
        console.log(id)
        setCurrentNote((currNote)=>{
                return {...currNote,text:e.target.value}
            })

    }


    function updateHandler(e)
    {
        e.preventDefault()
        console.log(currentNote)

        setNotes((currNote)=>{
            return currNote.map((note)=>{
               return (note.id==id) ?  {...note,text:currentNote.text} : note
            })
        })

        handleClose()
    }


  return (
    <div className="Modal">
        <Modal show={show} onHide={handleClose} >
            <Form >
            <Modal.Header closeButton>
                <Modal.Title>Update Note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea onChange={(e)=>textUpdate(e)} className="editArea" value={currentNote.text} rows="6" >
                    </textarea>
            </Modal.Body>
            <div className="d-flex justify-content-end mb-3 mx-3">
                <Button type="submit" onClick={(e)=>updateHandler(e)} variant="primary">Update</Button>
            </div>
            </Form>
        </Modal>
    </div>

  )
}
