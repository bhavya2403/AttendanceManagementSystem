import React, {useState} from 'react';
import { format } from 'date-fns'
import './MedicalForm.css';  // import the CSS file
import Card from '@mui/material/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LeaveNavbar from './LeaveNavbar';

format(new Date(), 'dd.MM.yyyy')

function MedicalForm() {
  const [studentName, setStudentName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [startLeaveDate, setStartLeaveDate] = useState('');
  const [endLeaveDate, setEndLeaveDate] = useState('');
  const [reason, setReason] = useState('');
  const [file, setFile] = useState();
  const [type,setType] = useState();
  
  const studentNameHandler = (event) => {
    setStudentName(event.target.value);
  }

  const setTypeHandler = (event) => {
    setType(event.target.value);
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

  const fileHandler = (event) => {
    setFile(event.target.files[0]);
  }
  


  let onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('studentName', studentName);
    formData.append('studentID', studentID);
    formData.append('startLeaveDate', startLeaveDate);
    formData.append('endLeaveDate', endLeaveDate);
    formData.append('type', type);
    formData.append('reason', reason);
    formData.append('file', file);

    try{
      const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 'X-CSRFToken': csrftoken
          },
          
          body: JSON.stringify({
            'studentName': studentName,
            'studentID': studentID,
            'startLeaveDate': startLeaveDate,
            'endLeaveDate': endLeaveDate,
            'type': type,
            'reason': reason,
            'file': file,
          }),
      }

      const response = await fetch("URL", requestOptions);
      const data = await response.json();
      if(response.ok){
        toast.success("Leave application submitted successfully!");
      }
      console.log(response);
    }catch(error){

    }

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
    console.log(type);
    setType('');
    console.log(file);
    setFile(null);
    document.getElementById("file").value = "";
  }

  return(
    <div>
      <LeaveNavbar/>
    <Card style={{ marginLeft: "250px", borderRadius:'10px', backgroundColor: '#EDF1D6', boxShadow: '0px 10px 30px black', marginTop: '40px',marginBottom: '40px',height: 'auto', width: '1000px'}}>
    <form className="form" onSubmit={onSubmitHandler} style={{marginTop:'50px'}}>
      <h1>FILL THIS FORM FOR LEAVE</h1><br/><br/><br/>
      <div className="form-group" style={{display: 'flex'}}>
        <label className="form-label" >Student Name:</label>
        <input className="form-input" id="student-name" type="text" value={studentName} onChange={studentNameHandler} required  />
      </div>
      <div className="form-group"  style={{display: 'flex'}}>
        <label className="form-label">Student ID:</label>
        <input className="form-input" id="student-id" type="text" value={studentID} onChange={studentIDHandler} required />
      </div>
      <div className="form-group"  style={{display: 'flex'}}>
        <label className="form-label">Leave Date:</label>
        <input className="form-input" id="date1" type="date" value={startLeaveDate} onChange={startLeaveDateHandler} style={{width: '177px'}} required/>
        <div style={{marginTop: '10px', marginLeft: '15px'}}>to</div>
        <input className="form-input" id="date2" type="date" value={endLeaveDate} onChange={endLeaveDateHandler} style={{width: '177px'}} required/>
      </div>
      <div className="form-group" style={{display: 'flex'}}>
        <label className="form-label" >Type of Leave: </label>
        <input className="form-input" id="type" type="text" value={type} onChange={setTypeHandler} required  />
      </div>
      <div className="form-group"  style={{display: 'flex'}}>
        <label className="form-label">Reason:</label>
        <textarea className="form-textarea" id="reason" value={reason} onChange={reasonHandler} required/>
      </div>
      <div style={{display: 'flex'}}>
        <label className="form-label" style={{marginRight: '110px'}}>Upload Documents</label>
        <input style={{ border: 'none', outline: 'none', }} id="file" type="file" accepts=".pdf,.doc.,.docx" onChange={fileHandler} required />
      </div>
      <button  className="form-button" style={{backgroundColor: '#40513B', marginRight: '50px', marginTop: '30px'}}type="submit">Submit</button>
    </form>
    </Card>
    </div>
  )
}

export default MedicalForm;
