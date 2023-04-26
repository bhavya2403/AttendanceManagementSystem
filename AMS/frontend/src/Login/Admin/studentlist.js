import React from 'react';
import './StudentList.css';
import { Link } from "react-router-dom";


const Studentli = [
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


function StudentList() {

  return (
    <div>
      {Studentli.map((student) => (
        <div key={student.id} className='student-list' color='black' >
          <Link to={`/student/Profile/${student.id}`}>
          {/* <Link to={`/student/Profile`}> */}
            {student.StudentName}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default StudentList