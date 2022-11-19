import Header from './components/Header';
import NotesPage from './pages/NotesPage';
import EditNote from './pages/EditNote';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <main>
    <Header/>
<div className='content'>
<Router>
    <Routes>
      <Route path="/" element={<NotesPage/>}/>
      <Route path="/react_note" element={<NotesPage/>}/>
      <Route path="/:title" element={<EditNote/>}/>
    </Routes>
  </Router>

</div>
    </main>)
}

export default App;
