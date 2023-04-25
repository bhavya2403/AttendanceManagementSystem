import './App.css';
import Login from './Login/Login';
import Student from './Login/Student/Student'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Faculty from './Login/Faculty/Faculty';
<<<<<<< HEAD
import Admin from './Login/Admin/StudentAttendance';
=======
import MedicalForm from './Login/Leave/MedicalForm'
import Admin from './Login/Admin/Admin';
>>>>>>> 1ac8fc427497086c8dd9fe56903d95bec2f9f16a

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Student/*" element={<Student/>}/>
        <Route path="/Faculty/*" element={<Faculty/>}/> 
<<<<<<< HEAD
        <Route path="/Admin/*" element={<Admin/>}/>
      </Routes>
=======
        <Route path ="/Leave/*" element={<MedicalForm/>}/>
        <Route path="/Admin/*" element={<Admin/>}/> 
        </Routes>
>>>>>>> 1ac8fc427497086c8dd9fe56903d95bec2f9f16a
    </BrowserRouter>

    </>
  );
}

export default App;
