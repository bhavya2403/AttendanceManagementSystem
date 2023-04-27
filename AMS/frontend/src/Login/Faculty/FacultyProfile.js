import React from 'react'
import FacultyAttendancePie from './FacultyAttendancePie'
import Fprofile from './Fprofile'
import TotalCourses from './TotalCourses'
import Achievements from './Achievements';
import FacultyNavbar from './FacultyNavbar';
import {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';

  


function FacultyProfile() {
    const [data, setData] = useState(null); // set initial state to null
    const [isLoading, setIsLoading] = useState(true); // add loading state
    const location = useLocation();
    const token = location?.state?.token;
    const csrftoken = location?.state?.csrftoken;

    window.token = token;
    console.log(token);
    const requestOptions = {
      method: 'POST',
      headers: { 
          'token': `${token}`,
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
      }
    };
  
    async function sendingReq() {
      try {
        const response = await fetch("/faculty/", requestOptions);
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
    return (
      <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
        <FacultyNavbar token={token} csrftoken={csrftoken}/>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <Fprofile sData={data}/>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{marginLeft: '20px', marginTop: '20px'}}>
                        <TotalCourses sData={data}/>
                    </div>
                    <div style={{marginLeft: '20px', marginTop: '20px'}}>
                        <FacultyAttendancePie/>
                    </div>
                </div>
                <div>
                    <Achievements sData={data}/>
                </div>
            </div>
        </div>
        </>
         )}
         </>
    )
}

export default FacultyProfile