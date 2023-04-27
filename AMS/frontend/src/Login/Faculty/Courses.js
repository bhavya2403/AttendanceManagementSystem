import React from 'react'
import './Courses.css'
import { useNavigate } from 'react-router-dom';
import FacultyNavbar from './FacultyNavbar';
import {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

function Courses() {
    const location = useLocation();

    const [data, setData] = useState(null); // set initial state to null
    const [isLoading, setIsLoading] = useState(true); // add loading state

    const requestOptions = {
        method: 'POST',
        headers: { 
            'token': `${window.token}`,
            'Content-Type': 'application/json',
            // 'X-CSRFToken': csrftoken
        }
      };
    
      async function sendingReq() {
        try {
          const response = await fetch("faculty/view_courses/", requestOptions);
          const data_local = await response.json();
          setData(data_local);
          setIsLoading(false); // set loading state to false
        } catch (err) {
          setIsLoading(false); // set loading state to false in case of error
        }
      }
    
      useEffect(() => {
        sendingReq();
      }, []);

    const navigate = useNavigate();

    const onStartClickHandler = () => {
        navigate('/AttendanceSheet');
    }
    const onViewClickHandler = () => {
        navigate('/ViewAttendance');
    }
    console.log(data);


    return (
        <>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
        <>
            <FacultyNavbar/>
            <div className="grid" >
                {data && data.data.map((course)=>{
                    console.log('heeeeeeeee')
                    console.log(course)
                    return(
                        <div className="coursecard" style={{ backgroundColor: '#EDF1D6' }}>
                        <h1>{course.course_name}</h1>
                        <h6>{course.total_students} students</h6>
                        <br />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <button style={{ width: '300px', backgroundColor: '#9DC08B', marginRight: '10px', color: 'black' }} onClick={onStartClickHandler}>Start Attendance</button>
                            <button style={{ width: '300px', backgroundColor: '#9DC08B', color: 'black' }} onClick={onViewClickHandler}>View Attendance</button>
                        </div>
                    </div>
                    )
                })
            }
            </div>
        </>
        )}
        </>
    )
    }


export default Courses