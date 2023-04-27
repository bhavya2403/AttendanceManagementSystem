import './AttendanceSheet.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FacultyNavbar from './FacultyNavbar';
import {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
function AttendanceSheet() {

  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true); // add loading state
  const [students, setStudents] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  console.log(selectedDate);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    handleFetchStudents(); //--> while tempdata is being used
    // setStudents(tempData) // comment during backend use
  };
  const handleFetchStudents = async () => {

    console.log(window.course);
    console.log(window.sem);
    console.log(selectedDate);
       const requestOptions = {
         method : 'POST',
         headers: {
           'Content-Type': 'application/json',
            // 'X-CSRFToken': csrftoken,
            'token': `${window.token}`,
          },
          body: JSON.stringify({
            'course_name': `${window.course}`,
            'semester': `${window.sem}`,
            'date': selectedDate
          })
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
console.log(students);

  const handleAttendanceChange = (event, studentId) => {
    const checked = event.target.checked;
    setStudents(students.map(s => s.id === studentId ? { ...s, present: checked } : s));
  };


  const onSubmitHandler = async (event) => {
    event.preventDefault();
  
    const presentStudents = students.filter(s => s.present).map(s => ({ id: s.id, name: s.name }));
  
    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'token': `${window.token}`,
        'Content-Type': 'application/json',
        // 'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({ 
        'course_name' : `${window.course}`,
        'semester': `${window.sem}`,
        presence: students,
        'date': selectedDate,
        'arrayOfStudents':  presentStudents 
      })
    };
  
    const response = await fetch('/faculty/view_courses/mark_attendance/attendance_page/submit', requestOptions);
    if (response.ok) {
      console.log('responce on clicking submit ')
      console.log(response)
      // Handle success
    } else {
      // Handle error
    }
  
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
                        <span style={{marginLeft: '10px'}}>{s.id}</span>
                        <span style={{marginLeft: '10px'}}>{s.name}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <button type="submit" onClick={onSubmitHandler}>Submit</button>
            </form>
          </div>
        )}
      </div>
    </>

  );

 };
export default AttendanceSheet;
