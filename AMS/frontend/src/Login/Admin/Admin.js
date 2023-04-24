import React from 'react'
import AdminNavbar from './AdminNavbar'
//import SeeCourses from './SeeCourses'
import { Routes, Route } from 'react-router-dom';


function Admin() {
  return (
    <div>
      <AdminNavbar />
      <Routes>
      {/* <Route path="Admin/SeeCourses"  element={<SeeCourses/>} />  */}
      </Routes>
    </div>

  )
}

export default Admin