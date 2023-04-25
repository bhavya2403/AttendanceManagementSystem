import React from 'react'
import FacultyAttendancePie from './FacultyAttendancePie'
import Fprofile from './Fprofile'
import TotalCourses from './TotalCourses'
import Achievements from './Achievements';
import FacultyNavbar from './FacultyNavbar';
function FacultyProfile() {
    return (
        <>
        <FacultyNavbar/>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <Fprofile/>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{marginLeft: '20px', marginTop: '20px'}}>
                        <TotalCourses/>
                    </div>
                    <div style={{marginLeft: '20px', marginTop: '20px'}}>
                        <FacultyAttendancePie/>
                    </div>
                </div>
                <div>
                    <Achievements/>
                </div>
            </div>
        </div>
        </>
    )
}

export default FacultyProfile