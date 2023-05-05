import './AttendanceSheet.css';
import DatePicker from "react-datepicker";
import {useState} from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { useLocation } from 'react-router-dom';
import FacultyNavbar from './FacultyNavbar';

function AttendanceSheet() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null); // here data is a json object contains data attribute which is an array
  const [selectedDate, setSelectedDate] = useState("");;
  
  const handleFetchStudents = async (date) => {
    setSelectedDate(() => date);
    setIsLoading(true);
    const response = await fetch ("/faculty/view_courses/attendance_page", {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': `${window.token}`,
      },
      body: JSON.stringify({
        'course_name': `${location?.state?.course_name}`,
        'semester': `${location?.state?.semester}`,
        'date': date,
      })
    });
    if (response) setIsLoading(() => false);
    const data_local = await response.json();
    setData(() => data_local);
  };
  const handleClickOnCheckBox = (event, index) => {  
    const checked = event.target.value;
    setData((prevData) => {
      const newData = prevData;
      newData.data[index][2] = (checked) ? 'present' : 'absent';
      event.target.value = (checked) ? 'present' : 'absent';
      return newData;
    });
  }
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(() => true);
    const response = await fetch('/faculty/view_courses/submit_attendance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': `${window.token}`,
      },
      body: JSON.stringify({
        'course_name' : `${location?.state?.course_name}`,
        'semester': `${location?.state?.semester}`,
        'date': selectedDate,
        'presence': JSON.stringify(data.data),
      })
    });
    if (response.ok) {
      setIsLoading(() => false);
      alert("Data updated successfully");
    }
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
          <DatePicker className="attendance-date-picker" selected={selectedDate} onChange={handleFetchStudents} minDate={new Date(2023, 0, 1)} placeholderText="Select a date"/>
        </div>
        <br />
        <br />
        {isLoading? <div>Please wait while the data is loading</div>: <></>}
        {data && (
            <>
              <div>
                <form>
                  <div className="card" style={{ marginBottom: '20px' }}>
                    <ul className="attendance-list" style={{ width: '500px' }}>

                    {data.data.map((course, index) => {
                      
                      return (

                          <li key={index} className="attendance-item">
                          <label className="attendance-label" style={{ color: 'black' }}>
                            <input
                              type="checkbox"
                              defaultChecked={course[2]=== 'absent' ? false : true}
                              onClick={(e) => {handleClickOnCheckBox(e, index)}}
                              style={{marginLeft: '10px' }}
                            />

                            <span style={{marginLeft: '10px'}}>{course[0]}</span>
                            <span style={{marginLeft: '10px'}}>{course[1]}</span>
                          </label>
                        </li>
                      );
                    })}
                    </ul>
                  </div>
                  <button type="submit" onClick={onSubmitHandler}>Submit</button>
                </form>
              </div>
            </>
          
        )}
      </div>
    </>

  );

 };
export default AttendanceSheet;