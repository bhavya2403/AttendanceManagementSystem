import './App.css';
import Login from './Login/Login';
import Student from './Login/Student/Student'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Faculty from './Login/Faculty/Faculty';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Student/*" element={<Student/>}/>
        <Route path="/Faculty/*" element={<Faculty/>}/> 
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
