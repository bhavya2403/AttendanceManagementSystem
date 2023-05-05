import './App.css';
import Login from './Login/Login';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Login/Student/Profile'
import SeeCourses from './Login/Student/SeeCourses';
import MedicalForm from './Login/Leave/MedicalForm';
import PastLeaves from './Login/Leave/PastLeaves';
import FacultyProfile from './Login/Faculty/FacultyProfile';
import Courses from './Login/Faculty/Courses';
import ViewAttendance from './Login/Faculty/ViewAttendance';
import AttendanceSheet from './Login/Faculty/AttendanceSheet';
import Navbar from './Login/Student/Navbar';
import FacultyNavbar from './Login/Faculty/FacultyNavbar';

window.token="";
window.course="";
window.sem="";
window.role="";
window.id="";
=======
import StudentRoutes from './StudentRoutes';
import FacultyRoutes from './FacultyRoutes';
import LeaveManageRoutes from './LeaveManageRoutes';
// import AdminRoutes from './AdminRoutes';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
>>>>>>> 11538885694ad0082e1103cbd787ca4ce617fb4c

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Faculty" element={<FacultyNavbar />} />
          <Route path="/Student" element={<Navbar />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/SeeCourses/" element={<SeeCourses />} />
          <Route path="/MedicalForm" element={<MedicalForm />} />
          <Route path="/FacultyProfile" element={<FacultyProfile />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/AttendanceSheet" element={<AttendanceSheet />} />
          <Route path="/ViewAttendance" element={<ViewAttendance />} />
          <Route path="/PastLeaves" element={<PastLeaves />} />
        </Routes>
      </BrowserRouter>

=======
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student/*" element={<StudentRoutes />} />
        <Route path="/faculty/*" element={<FacultyRoutes />} />
        {/* <Route path="/admin/*" element={<AdminRoutes />} /> */}
        <Route path="/leavemanage/*" element={<LeaveManageRoutes />} />
      </Routes>
>>>>>>> 11538885694ad0082e1103cbd787ca4ce617fb4c
    </>
  );
}

export default App;
