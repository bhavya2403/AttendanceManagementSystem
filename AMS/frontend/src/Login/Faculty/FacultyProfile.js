import React from 'react'
import './FacultyProfile.css'
function FacultyProfile() {
    return (
        <div className="Fcard-container">
            <header>
                <img src="https://e7.pngegg.com/pngimages/109/994/png-clipart-teacher-student-college-school-education-avatars-child-face.png"/>
            </header>
            <br/><br/>
            <h1 className="bold-text">Faculty Name</h1>
            <h2 className="bold-text">Faculty ID</h2>
            <br/>
            <p style={{width: '400px', fontSize: '1.2em', textAlign: 'center', marginLeft: '50px'}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, illo ipsum magni voluptatem incidunt velit et iure quam natus, accusantium placeat sed commodi quasi ea facere possimus fugiat soluta perferendis?</p>
      </div>
    )
}

export default FacultyProfile