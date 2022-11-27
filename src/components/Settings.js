import React from 'react';
import './settings.css';
const Settings = (props) => {
  return (
    <div className={" settings "+String(props.visible)}>
      <label htmlFor='long-notes'>Longer notes</label>
      <input type="checkbox" name='long-notes' checked={props.longNotes} onChange={props.onSubmit}/>
    </div>
  )
}

export default Settings;