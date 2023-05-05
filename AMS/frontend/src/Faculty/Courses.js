import React, { useLayoutEffect } from 'react'
import './Courses.css'
import { useLocation, useNavigate } from 'react-router-dom';
import FacultyNavbar from './FacultyNavbar';
import {useEffect, useState} from 'react'

function Courses() {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(null); // set initial state to null
  const [isLoading, setIsLoading] = useState(false); // add loading state

  async function sendingReq() {
    const response = await fetch("/faculty/view_courses/", {
      method: 'POST',
      headers: { 
        'token': `${window.token}`,
        'Content-Type': 'application/json',
      }
    });
    const data_local = await response.json();
    setData(() => data_local);
    setIsLoading(() => false); // set loading state to false
  }
  useEffect(() => {
    sendingReq();
  }, []);

  const onStartClickHandler = (course) => {
    navigate('/faculty/view_courses/attendance_page', {state: course})
  }
  const onViewClickHandler = (course) => {
    navigate('/faculty/view_courses/view_attendance', {state: course})
  }
  return (
      <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
      <>
          <FacultyNavbar/>
          <div className="grid" >
              {data && data.data.map((course)=>{
                  return(
                      <div className="coursecard" style={{ backgroundColor: '#EDF1D6' }}>
                      <h1>{course.course_name}</h1>
                      <h6>{course.total_students} students</h6>
                      <br />
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <button style={{ width: '300px', backgroundColor: '#9DC08B', marginRight: '10px', color: 'black' }} onClick={() => onStartClickHandler(course)}>Start Attendance</button>
                          <button style={{ width: '300px', backgroundColor: '#9DC08B', color: 'black' }} onClick={() => onViewClickHandler(course)}>View Attendance</button>
                      </div>
                  </div>
                  )
              })
          }
          </div>
      </>
      )}
      </>
  );
}

export default Courses