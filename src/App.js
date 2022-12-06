import NotesPage from './pages/NotesPage';
import EditNote from './pages/EditNote';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {useState} from 'react';
import Settings from './components/Settings';
import settingsImage from './settings.svg'

function App() {
  let [longNotes,setNotes] = useState(false);
  let [showSettings,setVisibilityOfSettings] = useState(false);

  function set(){
    setNotes(!longNotes);
  }
  return (
    <main>

    <header>
        <h1>My Note App</h1>
        <span id="long-notes">
          <button onClick={() => setVisibilityOfSettings(!showSettings)}><img src={settingsImage} alt="settings"/></button>
        </span>
    </header>
    <Settings visible={showSettings} onSubmit={set} longNotes={longNotes}/>


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