import React from 'react'
import './Courses.css'
import { useNavigate } from 'react-router-dom';
import FacultyNavbar from './FacultyNavbar';

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

    const onStartClickHandler = () => {
        navigate('/AttendanceSheet');
    }
    const onViewClickHandler = () => {
        navigate('/ViewAttendance');
    }


    return (
        <>
            <FacultyNavbar />
            <div className="grid" >
                {courses.map(course => (
                    <div className="coursecard" style={{ backgroundColor: '#EDF1D6' }}>
                        <h1>{course.name}</h1>
                        <h6>{course.number} students</h6>
                        <br />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <button style={{ width: '300px', backgroundColor: '#9DC08B', marginRight: '10px', color: 'black' }} onClick={onStartClickHandler}>Start Attendance</button>
                            <button style={{ width: '300px', backgroundColor: '#9DC08B', color: 'black' }} onClick={onViewClickHandler}>View Attendance</button>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Courses