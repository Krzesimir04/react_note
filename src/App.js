import NotesPage from './pages/NotesPage';
import EditNote from './pages/EditNote';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {useState} from 'react'

function App() {
  let [longNotes,setNotes] = useState(false);

  return (
    <main>

    <header>
        <h1>My Note App</h1>
        <span id="long-notes">
          <label htmlFor='long-notes'>Longer notes</label>
          <input type="checkbox" name='long-notes' onChange={(e)=>setNotes(!longNotes)}/>
        </span>
    </header>

    <div className='content'>
      <Router>
        <Routes>
          <Route path="/" element={<NotesPage longNotes={longNotes}/>}/>
         <Route path="/react_note" element={<NotesPage/>}/>
         <Route path="/:title" element={<EditNote/>}/>
        </Routes>
      </Router>

    </div>
    </main>)
}

export default App;