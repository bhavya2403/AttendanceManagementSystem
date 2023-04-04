import React from 'react'
import './Courses.css'
import { useNavigate } from 'react-router-dom';



function Courses() {
    const navigate = useNavigate();
    
    const onClickHandler = () => {
        navigate('/Faculty/AttendanceSheet');   
}

    return (
        <div className="coursecard">
            <h2>Human Computer Interaction</h2>
            <h6>240 Students</h6>
            <br/>

            <button style={{width: '300px', backgroundColor: '#FFDF77', color: 'black'}} onClick={onClickHandler}>Start Attendance</button>
        </div>
    )
}

export default Courses