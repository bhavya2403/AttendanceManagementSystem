import React, {useState} from 'react';
import { format } from 'date-fns'
import './MedicalForm.css';  // import the CSS file

format(new Date(), 'dd.MM.yyyy')

function MedicalForm() {
  const [studentName, setStudentName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [startLeaveDate, setStartLeaveDate] = useState('');
  const [endLeaveDate, setEndLeaveDate] = useState('');
  const [reason, setReason] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  
  const studentNameHandler = (event) => {
    setStudentName(event.target.value);
  }

  const studentIDHandler = (event) => {
    setStudentID(event.target.value);
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

  const phoneNoHandler = (event) => {
    setPhoneNo(event.target.value);
  }

  const emailHandler = (event) => {
    setEmail(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(studentName);
    setStudentName('');
    console.log(studentID);
    setStudentID('');
    console.log(startLeaveDate);
    setStartLeaveDate('');
    console.log(endLeaveDate);
    setEndLeaveDate('');
    console.log(reason);
    setReason('');
    console.log(phoneNo);
    setPhoneNo('');
    console.log(email);
    setEmail('');
  }

  return(
    <form className="form" onSubmit={onSubmitHandler} style={{marginTop:'50px'}}>
      <h1 style={{textAlign: 'center'}}>FILL THIS FORM FOR MEDICAL LEAVE</h1><br/><br/><br/>
      <div className="form-group" style={{display: 'flex'}}>
        <label className="label">Student Name:</label>
        <input className="input" id="student-name" type="text" value={studentName} onChange={studentNameHandler} required  />
      </div>
      <div className="form-group"  style={{display: 'flex'}}>
        <label className="label">Student ID:</label>
        <input className="input" id="student-id" type="text" value={studentID} onChange={studentIDHandler} required />
      </div>
      <div className="form-group"  style={{display: 'flex'}}>
        <label className="label">Leave Date:</label>
        <input className="input" id="date1" type="date" value={startLeaveDate} onChange={startLeaveDateHandler} style={{width: '177px'}} required/>
        <div style={{marginTop: '10px', marginLeft: '15px'}}>to</div>
        <input className="input" id="date2" type="date" value={endLeaveDate} onChange={endLeaveDateHandler} style={{width: '177px'}} required/>
      </div>
      <div className="form-group"  style={{display: 'flex'}}>
        <label className="label">Reason:</label>
        <textarea className="textarea" id="reason" value={reason} onChange={reasonHandler} required/>
      </div>
      <div className="form-group"  style={{display: 'flex'}}>
        <label className="label">Email ID: </label>
        <input className="input" id="email" type="email" value={email} onChange={emailHandler} required />
      </div>
      <div className="form-group"  style={{display: 'flex'}}>
        <label className="label">Phone:</label>
        <input className="input" id="phone" type="tel" value={phoneNo} onChange={phoneNoHandler} required />
      </div>

      <button  className="button" type="submit">Submit</button>
    </form>

  )
}

export default MedicalForm;
