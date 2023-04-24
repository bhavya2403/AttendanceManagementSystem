import React from 'react';
import './StudentList.css';

const StudentList = ({ students }) => {
  return (
    <div className="student-list-container">
      <h2>Student List</h2>
      <ul className="student-list">
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;