import React from 'react'
import FacultyNavbar from './FacultyNavbar'
import FacultyProfile from './FacultyProfile'
import {Routes, Route } from 'react-router-dom';
import Courses from './Courses';
import AttendanceSheet from './AttendanceSheet';
function Faculty(){
  return (
    <div>
      <FacultyNavbar/>
      <Routes>
        <Route path="/FacultyProfile" element={<FacultyProfile/>}/>
        <Route path="/Courses" element={<Courses/>}/>
        <Route path="/AttendanceSheet" element={<AttendanceSheet/>}/>
      </Routes>
      {/* <AttendanceSheet/> */}
    </div>
    
  )
}

export default Faculty