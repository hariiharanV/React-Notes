import { MdDelete } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';

function Note({id,text,date,deleteNote,editHandler}) {



  return (
    <div className="note mt-2">
        {/* <span>{text}</span> */}
        <textarea readOnly value={text} className="textarea" rows="6">{text}</textarea>
        <div className="note-footer">
            <small>{date}</small>
            <div>
            <AiOutlineEdit size={20} onClick={()=>{editHandler(true,text,id)}} className="edit mx-1"/>
            <MdDelete size={20} onClick={()=>{deleteNote(id)}} className="delete"/>
            </div>
        </div>
    </div>
  )
}

export default Note