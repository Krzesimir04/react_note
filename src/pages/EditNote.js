import React, {createRef} from 'react';
import {Link,useParams} from 'react-router-dom';
const EditNote = () => {
    let title=useParams().title;
    let text = createRef();
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
    localStorage.removeItem(title);
  }

  return (
    <>
        <div className='buttons_edit'>
            <Link className='note_btn' to={'/react_note'} onClick={Save}>BACK</Link>
            {( title === 'new' ? <Link className='note_btn' to={'/react_note'} onClick={Save}>DONE</Link> : <Link className='note_btn' to={'/react_note'} onClick={DeleteNote}>DELETE</Link>)}
        </div>
        <textarea ref={text} autoFocus={true}>{text.current}</textarea>
    </>
  );
}

export default EditNote;