import React from 'react'
import { Link } from 'react-router-dom';
import './AdminNavbar.css';


function AdminNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#40513B', }} >
        <div className="container-fluid" >

          <Link className="navbar-brand" to="/admin/" style={{ color: 'white' }}>Profile</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="nav-link active" to="/admin/RegisterUser" style={{ color: 'white' }}>Register User</Link>
          </ul>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <Link className="nav-link active" to="/admin/RegisterCourse" style={{ color: 'white' }}>Register Course</Link>
           </ul>
          </div>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


              <Link className="nav-link active" to="/admin/RegisterStudentCourse" style={{ color: 'white' }}>Register Student-Course</Link>

              

            </ul></div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="nav-link active" to="/admin/LeaveManagement" style={{ color: 'white' }}>Leave Management</Link>


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