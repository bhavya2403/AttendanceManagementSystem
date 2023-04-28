import './AttendanceSheet.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FacultyNavbar from './FacultyNavbar';
import {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import { parseISO } from 'date-fns';
function AttendanceSheet() {

  const [checkstatus, setcheckstatus] = useState(
    new Array(100).fill(false)
  );

  let date_temp
  const [isLoading, setIsLoading] = useState(true); // add loading state
  const [data, setData] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
    handleFetchStudents(date); //--> while tempdata is being used
    // setStudents(tempData) // comment during backend use
  };
  
  const handleFetchStudents = async (date) => {


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
            'date': date,
          })
        };
        // sname sid presence: true, false

        try{
              // Replace the following line with an API call  fetch the students for the given date
            const response = await fetch ("faculty/view_courses/mark_attendance/attendance_page", requestOptions);
            const data_local = await response.json();
            // id,name,present/absent
            console.log("data local", data_local)
            setData(data_local)
            console.log("data", data)
            setIsLoading(false);
        } catch (err) {
          setIsLoading(false); // set loading state to false in case of error

  };

}

const handleClickOnCheckBox = (event, index) => {  
  console.log('hereeeeeeeeeeeeeeeeeeeeeeeeeee')
  console.log(event)
  console.log(index)
  const checked = event.target.value;
  console.log(checked)
  setData((prevData) => {
    const newData = data;
    newData.data[index][2] = (checked) ? 'present' : 'absent';
    event.target.value = (checked) ? 'present' : 'absent';
    setcheckstatus((newCheck)=>{
      let new_t = checkstatus
      new_t[index] = (new_t[index] ? false : true);
      return new_t;
    })
    return newData;
  });
  console.log(data);
}



  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': `${window.token}`,
        // 'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({
        'course_name' : `${window.course}`,
        'semester': `${window.sem}`,
        'date': selectedDate,
        'presence':  data.data,
      })
    };
    const response = await fetch('/faculty/view_courses/mark_attendance/attendance_page/submit', requestOptions);
    console.log(response);
    if (response.ok) {
      console.log('responce on clicking submit ')
      console.log(response)
      // Handle success
    } else {
      // Handle error
    }
    setData(null)
    setSelectedDate("")
    setIsLoading(true)
  };
  console.log(selectedDate);
  console.log(data);
  return (
    <>

      <FacultyNavbar />
      <div className="attendance-container">
      <h1 className="attendance-header">Take Attendance</h1>

        <div className="date-picker-wrapper">
          <label className="attendance-label-date" style={{ marginTop: '20px',color: 'black', textAlign: 'center' }}>
            Select Date{''}
          </label>
          <DatePicker className="attendance-date-picker" selected={selectedDate} onChange={handleDateChange} minDate={new Date(2023, 0, 1)} placeholderText="Select a date"/>
        </div>
        <br />
        <br />
        
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
                              value={data.data[index][2] == 'absent' ? false : true}
                              // disabled={true}
                              // onChange={e => handleAttendanceChange(e, course)}
                              // onChange={(e)=>{handleClickOnCheckBox(e, index )}}
                              onClick={(e)=>{handleClickOnCheckBox(e, index )}}
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