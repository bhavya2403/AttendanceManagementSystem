import React, { useState } from 'react';
import { format } from 'date-fns'
import './MedicalForm.css';  // import the CSS file
import Card from '@mui/material/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LeaveNavbar from './LeaveNavbar';
import { useLocation } from 'react-router-dom';

format(new Date(), 'dd.MM.yyyy')

function MedicalForm() {

  const location = useLocation();
  const token = location?.state?.token;
  const csrftoken = location?.state?.csrftoken;
  const [startLeaveDate, setStartLeaveDate] = useState('');
  const [endLeaveDate, setEndLeaveDate] = useState('');
  const [reason, setReason] = useState('');
  const [type, setType] = useState();

  const setTypeHandler = (event) => {
    setType(event.target.value);
  }

  const startLeaveDateHandler = (event) => {
    setStartLeaveDate(event.target.value);
  }

  const endLeaveDateHandler = (event) => {
    setEndLeaveDate(event.target.value);
  }

  const reasonHandler = (event) => {
    setReason(event.target.value);
  }



  let onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('startLeaveDate', startLeaveDate);
    formData.append('endLeaveDate', endLeaveDate);
    formData.append('type', type);
    formData.append('reason', reason);
    // formData.append('file', file);

    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'token': `${window.token}`,
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken,
        },

        body: JSON.stringify({
          'start_date': startLeaveDate,
          'end_date': endLeaveDate,
          'leave_type': type,
          'report': reason,
          'id': `${window.id}`,
          'role': `${window.role}`,
          // 'file': file,
        }),
      }
      
      const response = await fetch("leavemanage/medicalform/", requestOptions);
      const data = await response.json();
      if (response.ok) {
        toast.success("Leave application submitted successfully!");
      }
      console.log(response);
    } catch (error) {

    }

    console.log(startLeaveDate);
    setStartLeaveDate('');
    console.log(endLeaveDate);
    setEndLeaveDate('');
    console.log(reason);
    setReason('');
    console.log(type);
    setType('');
  }

  return (
    <div>
      <LeaveNavbar />
      <Card style={{ marginLeft: "250px", borderRadius: '10px', backgroundColor: '#EDF1D6', boxShadow: '0px 10px 30px black', marginTop: '110px', marginBottom: '40px', height: 'auto', width: '1000px' }}>
        <form className="form" onSubmit={onSubmitHandler} style={{ marginTop: '50px' }}>
          <h1>FILL THIS FORM FOR LEAVE</h1><br /><br /><br />

          <div className="form-group" style={{ display: 'flex' }}>
            <label className="form-label">Leave Date:</label>
            <input className="form-input" id="date1" type="date" value={startLeaveDate} onChange={startLeaveDateHandler} style={{ width: '177px' }} required />
            <div style={{ marginTop: '10px', marginLeft: '15px' }}>to</div>
            <input className="form-input" id="date2" type="date" value={endLeaveDate} onChange={endLeaveDateHandler} style={{ width: '177px' }} required />
          </div>
          <div className="form-group" style={{ display: 'flex' }}>
            <label className="form-label" >Type of Leave: </label>
            <input className="form-input" id="type" type="text" value={type} onChange={setTypeHandler} required />
          </div>
          <div className="form-group" style={{ display: 'flex' }}>
            <label className="form-label">Reason:</label>
            <textarea className="form-textarea" id="reason" value={reason} onChange={reasonHandler} required />
          </div>
          <button className="form-button" style={{ backgroundColor: '#40513B', marginRight: '50px', marginTop: '30px', marginBottom: '40px' }} type="submit">Submit</button>
        </form>
      </Card>
    </div>
  )
}

export default MedicalForm;
