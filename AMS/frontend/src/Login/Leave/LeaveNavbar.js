import React from 'react'
import { Link } from 'react-router-dom';
import './LeaveNavbar.css'
import MedicalForm from './MedicalForm';
function LeaveNavbar(){
    return (   
      
          <nav className="navbar navbar-expand-lg"  style={{backgroundColor: '#40513B', }}>
          <div className="container-fluid" >
             <Link className="navbar-brand" to="/Leave/MedicalForm" style={{color: 'white'}}>Apply Leave</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link className="nav-link active" to="/Leave/PastLeaves" style={{color: 'white'}}>See Past Leaves</Link>
              </ul>

              <Link className="nav-link active" to="/"  style={{ color: 'white'}}>Go back</Link>
            </div>
          </div>
        </nav>
    )
}


export default LeaveNavbar