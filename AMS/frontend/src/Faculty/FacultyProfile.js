import React from 'react'
import FacultyAttendancePie from './FacultyAttendancePie'
import Fprofile from './Fprofile'
import TotalCourses from './TotalCourses'
import Achievements from './Achievements';
import FacultyNavbar from './FacultyNavbar';
import {useEffect, useState} from 'react'

function FacultyProfile() {
    const [data, setData] = useState(null); // set initial state to null
    const [isLoading, setIsLoading] = useState(true); // add loading state
  
    async function sendingReq() {
      const response = await fetch("/faculty/", {
        method: 'POST',
        headers: { 
            'token': `${window.token}`,
            'Content-Type': 'application/json',
        }
      });
      const data_local = await response.json();
      setData(() => data_local);
      setIsLoading(false); // set loading state to false
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
        <FacultyNavbar />
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