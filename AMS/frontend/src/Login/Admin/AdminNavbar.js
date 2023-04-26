import React from 'react'
import { Link } from 'react-router-dom';
import './AdminNavbar.css';


function AdminNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#40513B', }} >
        <div className="container-fluid" >
          <Link className="navbar-brand" to="/Faculty/FacultyProfile" style={{ color: 'white' }}>Profile</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="nav-link active" to="/Admin/Facultydetails" style={{ color: 'white' }}>Faculty</Link>
          </ul>
          </div>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="nav-link active" to="/Student/Profile" style={{ color: 'white' }}>Student</Link>
           </ul>
          </div>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="nav-link active" to="/Student/SeeCourses" style={{ color: 'white' }}>View Courses</Link>
            </ul></div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="nav-link active" to="/Faculty/Courses" style={{ color: 'white' }}>Leave Management</Link>
            </ul></div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="nav-link active" to="/" style={{ color: 'white' }}>Logout</Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}


export default AdminNavbar