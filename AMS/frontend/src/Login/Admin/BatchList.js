import React from 'react';
import './BatchList.css';
import {Link} from "react-router-dom";


const batchlist = [
  {
      id: '1',
      StudentName: 'BTECH I',
  },
  {
    id: '2',
    StudentName: 'BTECH II',
  },
  {
    id: '3',
    StudentName: 'BTECH III',
  },
  {
    id: '4',
    StudentName: 'BTECH IV',
  },
]


function BatchList(){
    
  return (
    <div>
    {batchlist.map((batch) => (
      <div key={batch.id} className='student-list' color='black' >
        <Link to={`/Admin/StudentList/${batch.id}`}>
          {batch.StudentName}
        </Link>
      </div>
    ))}
  </div>
  )
}

export default BatchList