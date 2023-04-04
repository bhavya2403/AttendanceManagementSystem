import React from 'react'
import './Courses.css'
import { useNavigate } from 'react-router-dom';

const courses = [
    {
        id: 'course1',
        name: 'Human Computer Interaction',
        number: '240',
    },

    {
        id: 'course2',
        name: 'Distributed System',
        number: '170',
    }
]

function Courses() {
    const navigate = useNavigate();
    
    const onClickHandler = () => {
        navigate('/Faculty/AttendanceSheet');   
}

    return (
        <div className="grid">
            {courses.map(course => (
                <div className="coursecard">
                <h1>{course.name}</h1>
                <h6>{course.number} students</h6>
                <br/>
                <button style={{width: '300px', backgroundColor: '#FFDF77', color: 'black'}} onClick={onClickHandler}>Start Attendance</button>
                </div>
            ))}
            
        </div>
    )
}

export default Courses