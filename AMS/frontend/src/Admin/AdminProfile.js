import React from 'react'
import './AdminProfile.css'
import AdminNavbar from './AdminNavbar';

function AdminProfile() {
    
    return (
        <>
        <AdminNavbar/>
        <div className="Acard-container" style={{ backgroundColor: '#9DC08B', color: 'white' }}>
            <header>
                <img src="https://e7.pngegg.com/pngimages/109/994/png-clipart-teacher-student-college-school-education-avatars-child-face.png" />
            </header>
            <br /><br />
            <h1 className="bold-text">Admin Name</h1>
            <h2 className="bold-text">Admin ID</h2>
            <br />
            <ul style={{ fontWeight: 'bold', fontSize: '1.5em', marginLeft: '15px' }}>
                <li>14/07/1800</li>
                <li>Hindi, English, Gujarati</li>
                <li>Designation</li>
            </ul>
        </div>
        </>
    )
}

export default AdminProfile;