import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminNavbar from './AdminNavbar'
import BatchList from './BatchList';
import FacultyList from './Facultylist';
import { Routes, Route } from 'react-router-dom';
import AdminProfile from './AdminProfile';
import LeaveManagement from './LeaveManagement';
import ViewCourses from './ViewCourses';
import Registration from './RegisterUser';
import CourseRegistrationForm from './RegisterCourse';


function Admin(props) {
  return (
    <div>
      <AdminNavbar />
      <Routes>
        <Route path="/BatchList"  element={<BatchList/>} /> 
        <Route path="/RegisterUser"  element={<Registration/>} /> 
        <Route path="/RegisterCourse"  element={<CourseRegistrationForm/>} /> 
        <Route path="/Facultylist"  element={<FacultyList/>} /> 
        <Route path="/AdminProfile"  element={<AdminProfile/>} />
        <Route path="/LeaveManagement"  element={<LeaveManagement/>} />
        <Route path="/ViewCourses"  element={<ViewCourses/>} />

      </Routes>
    </div>
  )
}

export default Admin