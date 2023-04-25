import './App.css';
import Login from './Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './Login/Admin/Admin';
import Leave from './Login/Leave/Leave';
import Profile from './Login/Student/Profile'
import SeeCourses from './Login/Student/SeeCourses';
import MedicalForm from './Login/Leave/MedicalForm';
import FacultyProfile from './Login/Faculty/FacultyProfile';
import Courses from './Login/Faculty/Courses';
import ViewAttendance from './Login/Faculty/ViewAttendance';
import AttendanceSheet from './Login/Faculty/AttendanceSheet';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Student" element={<Profile/>}/>
        <Route path="/Faculty" element={<FacultyProfile/>}/> 
        <Route path="/Admin/*" element={<Admin/>}/>
        <Route path ="/Leave/*" element={<Leave/>}/>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/SeeCourses/" element={<SeeCourses />} />
        <Route path="/MedicalForm" element={<MedicalForm />} />
        <Route path="/FacultyProfile" element={<FacultyProfile />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/AttendanceSheet" element={<AttendanceSheet />} />
        <Route path="/ViewAttendance" element={<ViewAttendance />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
