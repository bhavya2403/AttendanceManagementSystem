import React, { useState } from 'react';
import './AttendanceSheet.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FacultyNavbar from './FacultyNavbar';

function ViewAttendance() {
  const [students, setStudents] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');


  const handleFetchStudents = () => {
    // Replace the following line with an API call to fetch the students
    const studentNames = ['Alice', 'Bob', 'Charlie'];
    const initialStudents = studentNames.map(name => ({ name, present: false }));
    setStudents(initialStudents);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleAttendanceChange = (event, student) => {
    const checked = event.target.checked;
    setStudents(students.map(s => s.name === student ? { ...s, present: checked } : s));
  };

  const getNameColor = (name) => {
    return name[0] === 'A' ? 'green' : 'red';
  }
  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };
  const daysInMonth = getDaysInMonth(new Date().getFullYear(), new Date().getMonth());

  return (
    <>
      <FacultyNavbar />
      <div className="attendance-container">
        <h1 className="attendance-header">View Attendance</h1>

        <button className="attendance-button" onClick={handleFetchStudents}>View Attendance</button>
        <br />
        <br />
        {students.length > 0 && (
          <div>
            <label className="attendance-label-date" style={{ color: 'black' }}>
              Select Date: {' '}
              <select value={selectedDate} onChange={handleDateChange}>
                <option value="">Select a date</option>
                {daysInMonth.map(day => (
                  <option key={day.toISOString().slice(0, 10)} value={day.toISOString().slice(0, 10)}>{day.toDateString()}</option>
                ))}
              </select>
            </label>
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
    </>
  );
}

export default ViewAttendance;
