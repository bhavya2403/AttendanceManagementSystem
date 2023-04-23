import React, { useState } from 'react';
import './AttendanceSheet.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Attendance() {
  const [students, setStudents] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  
  
  const handleFetchStudents = () => {
    // Replace the following line with an API call to fetch the students
    const studentNames = ['Alice', 'Bob', 'Charlie'];
    const initialStudents = studentNames.map(name => ({ name, present: false }));
    setStudents(initialStudents);
  };
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  const handleAttendanceChange = (event, student) => {
    const checked = event.target.checked;
    setStudents(students.map(s => s.name === student ? { ...s, present: checked } : s));
  };
    
  return (
    <div className="attendance-container">
      <h1 className="attendance-header">Take Attendance</h1>
      
      <button className="attendance-button" onClick={handleFetchStudents}>Mark Attendance</button>
      <br />
      <br />
      {students.length > 0 && (
        <div>
          <div className="date-picker-wrapper">
            <label className="attendance-label-date">
              Select Date{''}
            </label>
            <DatePicker className="attendance-date-picker" selected={selectedDate} onChange={handleDateChange} minDate={new Date(2023, 0, 1)} placeholderText="Select a date" dateFormat="dd/MM/yyyy"/>
          </div>
          <br />
          <br />
          {selectedDate && (
            <div className="card">
              <ul className="attendance-list">
                {students.map(s => (
                  <li key={s.name} className="attendance-item">
                    <label className="attendance-label">
                      <input type="checkbox" checked={s.present} onChange={e => handleAttendanceChange(e, s.name)} style={{marginRight: '10px'}}/>
                      {s.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Attendance;
