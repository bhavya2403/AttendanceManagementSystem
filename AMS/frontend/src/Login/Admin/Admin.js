import React from 'react'
import AdminNavbar from './AdminNavbar'
import BatchList from './BatchList';
import StudentList from './studentlist';
import { Routes, Route } from 'react-router-dom';
import AdminProfile from './AdminProfile';
import LeaveManagement from './LeaveManagement';
import ViewCourses from './ViewCourses';


function Admin() {
  return (
    <div>
      <AdminNavbar />
      <Routes>
        <Route path="/BatchList"  element={<BatchList/>} /> 
        <Route path="/StudentList"  element={<StudentList/>} /> 
        <Route path="/AdminProfile"  element={<AdminProfile/>} />
        <Route path="/LeaveManagement"  element={<LeaveManagement/>} />
        <Route path="/ViewCourses"  element={<ViewCourses/>} />

      </Routes>
    </div>

  )
}

export default Admin