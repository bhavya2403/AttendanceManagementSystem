import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
  
  return (


    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#40513B', }}>
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/student/" style={{ color: 'white' }}>Profile</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            <Link className="nav-link active" to="/student/view_courses/" style={{ color: 'white' }}>See all courses</Link>


            <li className="nav-item">
              <Link className="nav-link active" to="/leavemanage/medicalform/" style={{ color: 'white' }}>Apply for Leave</Link>
            </li>

          </ul>

          <Link className="nav-link active" to ="/" style={{ color: 'white' }}>Logout</Link>
        </div>
      </div>
    </nav>
  )
}


export default Navbar