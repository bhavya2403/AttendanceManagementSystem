import React, { useState } from 'react';
import './AttendanceSheet.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ViewAttendance() {
  const [program, setProgram] = useState('bachelor');
  const [students, setStudents] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  
  const handleProgramChange = (event) => {
    setProgram(event.target.value);
  };
  
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
  
  const daysInMonth = [];
  const getNameColor = (name) => {
    return name[0] === 'A' ? 'green' : 'red';
  }
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  for (let d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
    daysInMonth.push(new Date(d));
  }
  
  return (
    <div className="attendance-container">
      <h1 className="attendance-header">View Attendance</h1>
      <label className="attendance-label">
        Program:{' '}
        <select value={program} onChange={handleProgramChange}>
          <option value="bachelor">Bachelor</option>
          <option value="masters">Masters</option>
        </select>
      </label>
      <button className="attendance-button" onClick={handleFetchStudents}>Fetch Students</button>
      <br />
      <br />
      {students.length > 0 && (
        <div>
          <h2>{program === 'bachelor' ? 'B.Sc.' : 'M.Sc.'} Students</h2>
          <div className="date-picker-wrapper">
            <label className="attendance-label">
              Date:{' '}
            </label>
            <DatePicker
              className="attendance-date-picker"
              selected={selectedDate}
              onChange={handleDateChange}
              minDate={new Date(2023, 0, 1)}
              placeholderText="Select a date"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <br />
          <br />
          {selectedDate && (
            <div className="card">
              <ul className="attendance-list">
                {students.map(s => (
                  <li key={s.name} className="attendance-item">
                    <label className="attendance-label" style={{ color: getNameColor(s.name) }}> 
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

export default ViewAttendance;
