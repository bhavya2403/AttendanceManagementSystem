import React, { useState } from 'react';
import './AttendanceSheet.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FacultyNavbar from './FacultyNavbar';

function ViewAttendance() {
  const [isLoading, setIsLoading] = useState(true); // add loading state
  const [students, setStudents] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [dates,setDates] = useState([]);

  const handleFetchStudents = async () => {

    const requestOptions = {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
         // 'X-CSRFToken': csrftoken,
         'token': `${window.token}`,
         'name': `${window.course}`,
         'semester': `${window.sem}`,
         'date': selectedDate,
       }
     };
     // sname sid presence: true, false
   
     try{
           // Replace the following line with an API call to fetch the students for the given date
         const response = await fetch ("faculty/view_courses/mark_attendance/attendance_page", requestOptions);
         const data_local = await response.json();
         // id,name,present/absent
         setStudents(data_local)
         setIsLoading(false);
     } catch (err) {
       setIsLoading(false); // set loading state to false in case of error
     
  };
}

  const handleDateChange = (date) => {
    setSelectedDate(date);
    handleFetchStudents(date);
  };


  const getNameColor = (name) => {
    return name[0] === 'A' ? 'green' : 'red';
  }
  const getDaysInMonth = async () => {
    const requestOptions = {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
         // 'X-CSRFToken': csrftoken,
         'token': `${window.token}`,
         'name': `${window.course}`,
         'semester': `${window.sem}`,
       }
     };

     try{
           // Replace the following line with an API call to fetch the students for the given date
         const response = await fetch ("faculty/view_courses/mark_attendance/start_attendance", requestOptions);
         const data_local = await response.json();
         // dates array
         setDates(data_local)
         setIsLoading(false);
     } catch (err) {
       setIsLoading(false); // set loading state to false in case of error
     
    };    
  };
  getDaysInMonth();
  return (
    <>
      <FacultyNavbar />
      <div className="attendance-container">
        <h1 className="attendance-header">View Attendance</h1>
        <label className="attendance-label-date" style={{ color: 'black', marginTop: '20px' }}>
              Select Date: {' '}
              <select selected={selectedDate} onChange={handleDateChange}>
                <option value="">Select a date</option>
                {dates.map(day => (
                  <option key={day.toISOString().slice(0, 10)} value={day.toISOString().slice(0, 10)}>{day.toDateString()}</option>
                ))}
              </select>
            </label>
        <br />
        <br />
        {selectedDate && students.length > 0 && (
          <div>
            <br />
            <br />
            {selectedDate && (
              <div className="card">
                <ul className="attendance-list">
                  {students.map(s => (
                    <li key={s.name} className="attendance-item">
                      <label className="attendance-label" style={{ color: getNameColor(s.name) }}>
                      <span style={{marginLeft: '10px'}}>{s.name}</span>
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
