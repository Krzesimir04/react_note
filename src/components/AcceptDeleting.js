import React from 'react';
import {Link} from 'react-router-dom';
import './AcceptDeleting.css';
const AcceptDeleting = (props) => {

function DeleteNote(){
  localStorage.removeItem(props.title);
}

  return (
    <div id="v"className={props.visible}>
        <button onClick={props.onSubmit}>No</button>
        <p>Are you sure?</p>
        <Link className='note-btn' to={'/'} onClick={DeleteNote}>Yes</Link>
    </div>
  );
}

export default AcceptDeleting;