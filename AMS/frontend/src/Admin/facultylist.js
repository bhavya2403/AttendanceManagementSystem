import React from 'react';
import './StudentList.css';
import FacultyTa from './FacultyTable';
import {Link} from "react-router-dom";
import AdminNavbar from './AdminNavbar';



const facultyli = [
  {
      id: '243455465',
      StudentName: 'Vineet',
  },
  {
      id: '234556778',
      StudentName: 'Samay',
  },
]


function FacultyList(){
    
  return (
    <>
    {/* <AdminNavbar/> */}
    <div>
    {/* {facultyli.map((faculty) => (
      <div key={faculty.id} className='list-container'  style={{ display: 'block', flexDirection: 'row' }}>
        <Link to={`/student/Profile/${faculty.id}`} className='list-item'>
          {faculty.id} ({faculty.StudentName})
        </Link>
      </div>
    ))} */}
    <FacultyTa data={facultyli} />
  </div>
  </>
  )
}

export default FacultyList 