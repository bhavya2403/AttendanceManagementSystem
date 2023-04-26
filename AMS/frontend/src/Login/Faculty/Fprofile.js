import React from 'react'
import './Fprofile.css'

function Fprofile(props) {
    return (
        <div className="Fcard-container" style={{ backgroundColor: '#9DC08B', color: 'white' }}>
            <header>
                <img src="https://e7.pngegg.com/pngimages/109/994/png-clipart-teacher-student-college-school-education-avatars-child-face.png" />
            </header>
            <br /><br />
            <h1 className="bold-text">{props.sData.name}</h1>
            <h2 className="bold-text">{props.sData.id}</h2>
            <br />
            <ul style={{ fontWeight: 'bold', fontSize: '1.5em', marginLeft: '15px' }}>
                <li>{props.sData.age}</li>
                <li>{props.sData.experience}</li>
                <li>{props.sData.role}</li>
            </ul>
        </div>
    )
}

export default Fprofile;