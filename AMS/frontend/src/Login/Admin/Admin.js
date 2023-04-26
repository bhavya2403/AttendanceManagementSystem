import React from 'react'
import AdminNavbar from './AdminNavbar'
import BatchList from './BatchList';
import { Routes, Route } from 'react-router-dom';


function Admin() {
  return (
    <div>
      <AdminNavbar />
      <Routes>
        <Route path="/BatchList"  element={<BatchList/>} /> 
      </Routes>
    </div>

  )
}

export default Admin