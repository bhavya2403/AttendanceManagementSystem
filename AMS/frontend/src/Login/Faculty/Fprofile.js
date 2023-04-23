import React from 'react'
import './Fprofile.css'

function Fprofile() {
    return (
        <div className="Fcard-container" style={{ backgroundColor: '#9DC08B', color: 'white'}}>
            <header>
                <img src="https://e7.pngegg.com/pngimages/109/994/png-clipart-teacher-student-college-school-education-avatars-child-face.png"/>
            </header>
            <br/><br/>
            <h1 className="bold-text">Faculty Name</h1>
            <h2 className="bold-text">Faculty ID</h2>
            <br/>
            <ul style={{fontWeight: 'bold', fontSize: '1.5em', marginLeft: '15px'}}>
                <li>14/07/1800</li>
                <li>Indian</li>
                <li>Male</li>
                <li>Hindi, English, Gujarati</li>
                <li>Assistant professor</li>
            </ul>
        </div>
    )
}

export default Fprofile;