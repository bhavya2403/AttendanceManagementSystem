import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar'
import './RegisterStudentCourse.css';

const RegisterStudentCourse = () => {
    const [courseCode, setCourseCode] = useState('');
    const [semester, setSemester] = useState('');
    const [studentID, setStudentId] = useState('');
    const [pageStatus, setPageStatus] = useState('noloading');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setPageStatus('loading');
        const response = await fetch('/admin/register_student_in_course/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'token': window.token
          },
          body: JSON.stringify({
              'code': courseCode,
              'semester': semester,
              'id': studentID
          })
        });
        if (!response) {}
        else if (response.status==406) setPageStatus('unacceptable');
        else if (response.status==409) setPageStatus('conflict');
        else if (response.status==412) setPageStatus('notenoughdata');
        else setPageStatus('done');
    };

    return (
    <>
      <AdminNavbar/>
      <div>
        <h2 style={{marginLeft: '190px'}}>Student Form</h2>
        <form onSubmit={handleSubmit}>
        <label className='form-label'>
            Course Code:
            <input style={{width: '400px', marginLeft: '60px'}} type="text" name="code" value={courseCode} onChange={(event) => setCourseCode(event.target.value)} required/>
        </label>
        <label className='form-label'>
            Semester:
            <input style={{width: '400px', marginLeft: '100px'}} type="text" name="sem" value={semester} onChange={(event) => setSemester(event.target.value)} required/>
        </label>
        <label className='form-label'>
            Student Id:
            <input style={{width: '400px', marginLeft: '67px'}}  type="number" name="roll" value={studentID} onChange={(event) => setStudentId(event.target.value)} required/>
        </label>
        <div>{pageStatus=='loading'? 'Please Wait': 
                pageStatus=='notenoughdata'? 'All the fields are compulsory': 
                pageStatus=='conflict'? 'User in the course Already exists': 
                pageStatus=='unacceptable'? "Either course or student doesn't exist": 
                pageStatus=='done'? 'Done. Try another submit': ''}</div>
        <button type="submit" disabled={pageStatus=='loading'}>Submit</button>
        </form>
      </div>
    </>
    )
};

export default RegisterStudentCourse;