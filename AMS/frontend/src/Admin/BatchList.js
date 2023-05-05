import React from 'react';
import './BatchList.css';
import FacultyTa from './FacultyTable';
import {Link} from "react-router-dom";


const batchlist = [
  {
    id: '1',
    Rollno: '202001060',
    StudentName: 'Student A',
  },
  {
    id: '2',
    Rollno: '202001061',
    StudentName: 'Student B',
  },
  {
    id: '3',
    Rollno: '202001064',
    StudentName: 'Student C',
  },
  {
    id: '4',
    Rollno: '202001069',
    StudentName: 'Student D',
  },
]


function BatchList(){
    
  return (
    <div>
    {/* {batchlist.map((batch) => (
      <div key={batch.id} className='student-list' color='black' >
        <Link to={`/Admin/StudentList/${batch.id}`}>
        <Link to={`/Admin/StudentList`}>
        {batch.Rollno}   {batch.StudentName}
        </Link>
      </div>
    ))} */}
    <FacultyTa data={batchlist} />
  </div>
  )
}

export default BatchList