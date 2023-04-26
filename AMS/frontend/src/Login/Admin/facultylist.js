import React from 'react';
import './StudentList.css';
import {Link} from "react-router-dom";
import { createElement } from 'react';


const studentlist = [
  {
      id: '1',
      StudentName: 'Vineet',
  },
  {
    id: '2',
    StudentName: 'Samay',
  },
]


function StudentList(){
    
  return (
    <div>
    {studentlist.map((student) => (
      <div key={student.id} style={{ display: 'block', backgroundColor: '#60573D', flexDirection: 'row' }}>
        <Link to={`/student/Profile/${student.id}`}>
          {student.id} ({student.StudentName})
        </Link>
      </div>
    ))}
  </div>
  )
}

export default StudentList