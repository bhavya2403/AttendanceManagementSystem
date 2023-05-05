import React from 'react';

import './FTable.css';
import {Link} from "react-router-dom";

const FacultyTa = ({ data }) => {
  return (
    <table>
      <thead className='tablef'>
        <tr>
          <th>Faculty ID</th>
          <th>Faculty Name</th>
        </tr>
      </thead>
      <tbody className='tablef'>
        {data.map((item) => (
            <tr key={item.id}>
            <td><Link to="Faculty/Profile" >{item.id} </Link></td>
            <td><Link to="Faculty/Profile" >{item.StudentName} </Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FacultyTa;