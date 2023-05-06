import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar'
import './RegisterUser.css';

function RegisterUser() {
  const [selectedOption, setSelectedOption] = useState('');


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
    <AdminNavbar/>
    <div className="form-card">
      <div className="radio-buttons" style={{marginLeft: '170px'}}>
        <label className="radio-label">
          <input
            type="radio"
            value="student"
            checked={selectedOption === "student"}
            onChange={handleOptionChange}
          />
          <span>Student</span>
        </label>
        <label className="radio-label">
          <input
            type="radio"
            value="faculty"
            checked={selectedOption === "faculty"}
            onChange={handleOptionChange}
          />
          <span>Faculty</span>
        </label>
      </div>
      {selectedOption === "student" ? (
        <StudentForm />
      ) : selectedOption === "faculty" ? (
        <FacultyForm />
      ) : null}
    </div>
    </>
  );
}

function StudentForm() {
  const [studentName,setStudentName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [studentPassword, setStudentPassword] = useState('');
  const [studentBatch, setStudentBatch] = useState('');
  const [pageStatus, setPageStatus] = useState('noloading');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPageStatus('loading');
    const response = await fetch('/admin/register_user/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'token': window.token
      },
      body: JSON.stringify({
          'id': studentID,
          'name': studentName,
          'password': studentPassword,
          'role': 'student',
          'email': `${studentID}@daiict.ac.in`,
          'batch': studentBatch
      })
    });
    if (!response) {}
    else if (response.status==409) setPageStatus('conflict');
    else if (response.status==412) setPageStatus('notenoughdata');
    else setPageStatus('done');
  };

  return (
    <div>
      <h2 style={{marginLeft: '190px'}}>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <label className='form-label'>
          Name:
          <input style={{width: '400px', marginLeft: '60px'}} type="text" name="name" value={studentName} onChange={(event) => setStudentName(event.target.value)} required/>
        </label>
        <label className='form-label'>
          ID:
          <input style={{width: '400px', marginLeft: '100px'}} type="number" name="rollno" value={studentID} onChange={(event) => setStudentID(event.target.value)} required/>
        </label>
        <label className='form-label'>
          Password:
          <input style={{width: '400px', marginLeft: '67px'}}  type="password" name="password" value={studentPassword} onChange={(event) => setStudentPassword(event.target.value)} required/>
        </label>
        <label className='form-label'>
          Batch:
          <input style={{width: '400px', marginLeft: '67px'}}  type="text" name="batch" value={studentBatch} onChange={(event) => setStudentBatch(event.target.value)} required/>
        </label>
        <div>{pageStatus=='loading'? 'Please Wait': pageStatus=='notenoughdata'? 'Student id and password are compulsory': pageStatus=='conflict'? 'User Already exists': pageStatus=='done'? 'Done. Try another submit': ''}</div>
        <button type="submit" disabled={pageStatus=='loading'}>Submit</button>
      </form>
    </div>
  );
}

function FacultyForm() {
    
  const [facultyName,setFacultyName] = useState('');
  const [facultyID, setFacultyID] = useState('');
  const [facultyAge,setFacultyAge] = useState('');
  const [facultyGender,setFacultyGender] = useState('');
  const [facultyPost, setFacultyPost] = useState('');
  const [facultyEmail, setFacultyEmail] = useState('');
  const [facultyDescription, setFacultyDescription] = useState('');
  const [facultyPassword, setFacultyPassword] = useState('');
  const [pageStatus, setPageStatus] = useState('noloading');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPageStatus('loading');
    const response = await fetch('/admin/register_user/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'token': window.token
      },
      body: JSON.stringify({
          'id': facultyID,
          'name': facultyName,
          'password': facultyPassword,
          'role': 'instructor',
          'email': facultyEmail,
          'age': facultyAge,
          'gender': facultyGender,
          'post': facultyPost,
          'description': facultyDescription,
      })
    });
    if (!response) {}
    else if (response.status==409) setPageStatus('conflict');
    else if (response.status==412) setPageStatus('notenoughdata');
    else setPageStatus('done');
  };
  return (
    <div>
      <h2 style={{marginLeft: '190px'}}>Faculty Form</h2>
      <form onSubmit={handleSubmit}>
      <label className='form-label'>
          Name:
          <input style={{width: '400px', marginLeft: '60px'}} type="text" name="fname" value={facultyName} onChange={(event) => setFacultyName(event.target.value)} required/>
        </label>
        <label className='form-label'>
          ID:
          <input style={{width: '400px', marginLeft: '100px'}} type="number" name="fid" value={facultyID} onChange={(event) => setFacultyID(event.target.value)} required/>
        </label>
        <label className='form-label'>
          Password:
          <input style={{width: '400px', marginLeft: '67px'}}  type="password" name="password" value={facultyPassword} onChange={(event) => setFacultyPassword(event.target.value)} required/>
        </label>
        <label className='form-label'>
          Age:
          <input style={{width: '400px', marginLeft: '82px'}} type="number" name="fage" value={facultyAge} onChange={(event) => setFacultyAge(event.target.value)} required/>
        </label>
        <label className='form-label'>
          Gender:
          <input style={{width: '400px', marginLeft: '47px'}} type="text" name="fgender" value={facultyGender} onChange={(event) => setFacultyGender(event.target.value)} required/>
        </label>
        <label className='form-label'>
          Post:
          <input style={{width: '400px', marginLeft: '80px'}} type="text" name="fpost" value={facultyPost} onChange={(event) => setFacultyPost(event.target.value)} required/>
        </label>
        <label className='form-label'>
          Email:
          <input style={{width: '400px', marginLeft: '68px'}} type="email" name="femail" value={facultyEmail} onChange={(event) => setFacultyEmail(event.target.value)} required/>
        </label>
        <label className='form-label'>
          Description:
          <input
                style={{ width: '400px', marginLeft: '7px'}}
                name="description"
                value={facultyDescription}
                onChange={(event) => setFacultyDescription(event.target.value)}
                required
        />
        </label>
        <div>{pageStatus=='loading'? 'Please Wait': pageStatus=='notenoughdata'? 'Faculty id and password are compulsory': pageStatus=='conflict'? 'User Already exists': pageStatus=='done'? 'Done. Try another submit': ''}</div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default RegisterUser