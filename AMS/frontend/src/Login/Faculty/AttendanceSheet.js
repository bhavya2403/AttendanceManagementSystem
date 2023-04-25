import React, { useState } from 'react';
import './AttendanceSheet.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FacultyNavbar from './FacultyNavbar';

function AttendanceSheet() {
  const [students, setStudents] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleFetchStudents = (date) => {
    // Replace the following line with an API call to fetch the students for the given date
    const studentNames = ['Alice', 'Bob', 'Charlie'];
    const initialStudents = studentNames.map(name => ({ id: name, name, present: false }));
    setStudents(initialStudents);
    setIsChecked(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    handleFetchStudents(date);
  };

  const handleAttendanceChange = (event, studentId) => {
    const checked = event.target.checked;
    setStudents(students.map(s => s.id === studentId ? { ...s, present: checked } : s));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setStudents([]);
    setIsChecked(true);
    setSelectedDate(null);

  };


  return (
    <>
      <FacultyNavbar />
      <div className="attendance-container">
      <h1 className="attendance-header">Take Attendance</h1>

        <div className="date-picker-wrapper">
          <label className="attendance-label-date" style={{ marginTop: '20px',color: 'black', textAlign: 'center' }}>
            Select Date{''}
          </label>
          <DatePicker className="attendance-date-picker" selected={selectedDate} onChange={handleDateChange} minDate={new Date(2023, 0, 1)} placeholderText="Select a date" dateFormat="dd/MM/yyyy" />
        </div>
        <br />
        <br />
        {selectedDate && students.length > 0 && (
          <div>
            <form onSubmit={onSubmitHandler}>
              <div className="card" style={{ marginBottom: '20px' }}>
                <ul className="attendance-list" style={{ width: '500px' }}>
                  {students.map(s => (
                    <li key={s.id} className="attendance-item">
                      <label className="attendance-label" style={{ color: 'black' }}>
                        <input type="checkbox" checked={s.present} onChange={e => handleAttendanceChange(e, s.id)} style={{marginLeft: '10px' }} />
                        <span style={{marginLeft: '10px'}}>{s.name}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default AttendanceSheet;
