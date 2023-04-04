import React from 'react'
import { Link } from 'react-router-dom';
import './FacultyNavbar.css'

function FacultyNavbar(){
    return (   
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: "blue"}}>
      <div className="container-fluid" >
         <Link className="navbar-brand" to="/Faculty/FacultyProfile">Profile</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="nav-link active" to="/Faculty/Courses">Mark Attendance</Link>
          </ul>

          <Link className="nav-link active" to="/">Logout</Link>
        </div>
      </div>
    </nav>
    )
}


export default FacultyNavbar