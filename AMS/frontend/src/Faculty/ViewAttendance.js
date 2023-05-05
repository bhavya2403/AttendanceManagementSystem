import './AttendanceSheet.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FacultyNavbar from './FacultyNavbar';
import {useState} from 'react'
import {useLocation} from 'react-router-dom';

const getColor = (atten) => {
  return atten==='present'?'green':'red';
}

function AttendanceSheet() {
  const location = useLocation();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  
  const handleFetchStudents = async (date) => {
    setSelectedDate(() => date);
    setIsLoading(() => true);
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
    setData(() => data_local)
  }

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
                              
                          <label className="attendance-label" style={{ color: getColor(course[2]) }}>
                          
                            <span style={{marginLeft: '10px'}}>{course[0]}</span>
                            <span style={{marginLeft: '10px'}}>{course[1]}</span>
                          </label>
                        </li>
                      );
                    })}
                    </ul>
                  </div>
                </form>
              </div>
            </>
        )}
      </div>
    </>
  );
};
export default AttendanceSheet;