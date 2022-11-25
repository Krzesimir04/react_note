import React from 'react';
import {Link} from 'react-router-dom';
import plus from './plus.svg';
const NotesPage = (props) => {

//sorting notes and displaying them
  let listOfNotesIds = Object.keys(localStorage).sort();
  let Notes = listOfNotesIds.map((value)=>
    (<div key={value}><Link className='note' to={`/${value}`}><p>{`${props.longNotes ? localStorage[value].slice(0,600) : (localStorage[value].length>20 ? localStorage[value].slice(0,19)+ ' ...' : localStorage[value])}`}</p></Link></div>)
  );

  return (
    <>
        {Notes}
        <Link to={'/new'} className='add-button'><img alt='ADD' src={plus}/></Link>
    </>
  )
}

export default NotesPage;