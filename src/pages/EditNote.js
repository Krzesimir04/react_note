import React, {createRef,useState} from 'react';
import {Link,useParams} from 'react-router-dom';
import AcceptDeleting from '../components/AcceptDeleting';
const EditNote = () => {
    let title=useParams().title;
    let text = createRef();
    let [visible, setVisible] = useState("unvisible")
    text.current = localStorage[title];

//Save or remove when note is blank
    let Save = () =>{
//remove note from local starage when page is blank
    if (text.current.value === ''){
      localStorage.removeItem(title);
    }else{
//upgrade when note is not new
      if(title !== 'new'){
       localStorage.setItem(title,text.current.value);
//add new note to local storage
      }
      else{
        let listOfKeys = Object.keys(localStorage);
        let len = localStorage.length;
        while (listOfKeys.includes(String(len))){
          len+=1;
        }
       localStorage.setItem(len,text.current.value);
      }
    }}

//delete note
  let DeleteNote = () => {
    setVisible("visible")
  }
  let ChangeClass=()=>{
    setVisible("unvisible")
  }
  return (
    <>
      <AcceptDeleting visible={visible} title={title} onSubmit={ChangeClass}/>
        <div className='buttons-edit'>
            <Link className='note-btn' to={'/'} onClick={Save}>BACK</Link>
            {( title === 'new' ? <Link className='note-btn' to={'/'} onClick={Save}>DONE</Link> : <button className='note-btn' onClick={DeleteNote}>DELETE</button>)}
        </div>
        <textarea ref={text} autoFocus={true}>{text.current}</textarea>
    </>
  );
}

export default EditNote;