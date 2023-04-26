import React from 'react';
import './SatchList.css';
import {Link} from "react-router-dom";


const studentlist = [
  {
      id: '1',
      StudentName: 'Student A',
  },
  {
    id: '2',
    StudentName: 'Student B',
  },
  {
    id: '3',
    StudentName: 'Student C',
  },
  {
    id: '4',
    StudentName: 'Student D',
  },
]


function StudentList(){
    
  return (
    <div>
    {studentlist.map((batch) => (
      <div key={batch.id} className='student-list' color='black' >
        <Link to={`/student/Profile/${batch.id}`}>
          {batch.StudentName}
        </Link>
      </div>
    ))}
  </div>
  )
}

export default StudentList