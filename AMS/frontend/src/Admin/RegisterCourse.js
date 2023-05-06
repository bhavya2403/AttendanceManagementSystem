import React, { useState } from "react";
import './RegisterCourse.css'
import AdminNavbar from './AdminNavbar'


const RegisterCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [semester, setSemester] = useState("");
  const [instructorId, setInstructorId] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [pageStatus, setPageStatus] = useState('noloading');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPageStatus('loading');
    const response = await fetch('/admin/register_course/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'token': window.token
      },
      body: JSON.stringify({
          'code': courseCode,
          'semester': semester,
          'name': courseName,
          'description': courseDescription,
          'id': instructorId
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
    <div className="course-card">
      <h1 style={{marginLeft: '130px', marginBottom: '20px'}}>Register Course</h1>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 d-flex align-items-center">
            <label style={{ whiteSpace: 'nowrap', color: 'black', fontWeight: 'bold' }}>
              Course Name 
            </label>
            <input
            style={{marginLeft: '40px'}}
              type="text"
              id="courseName"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label style={{ whiteSpace: 'nowrap',color: 'black', fontWeight: 'bold' }}>
              Course Code 
            </label>
            <input
            style={{marginLeft: '50px'}}
              type="text"
              id="courseCode"
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label style={{ whiteSpace: 'nowrap',color: 'black', fontWeight: 'bold'  }}>
              Semester 
            </label>
            <input
              type="text"
                style={{marginLeft: '80px'}}
              id="semester"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label  style={{ whiteSpace: 'nowrap',color: 'black', fontWeight: 'bold' }}>
              Instructor ID 
            </label>
            <input
              type="text"
              style={{marginLeft: '47px'}}
              id="instructorId"
              value={instructorId}
              onChange={(e) => setInstructorId(e.target.value)}
              required
            />
          </div>
          <br/>
          <div>
            <label style={{ whiteSpace: 'nowrap',color: 'black', fontWeight: 'bold' }}>
              Course Description
            </label>
            <textarea
                style={{width: '280px', backgroundColor: '#EDF1D6', borderRadius: '10px'}}
              id="courseDescription"
              rows="3"
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
            ></textarea>
          </div>
          <div>{pageStatus=='loading'? 'Please Wait': 
            pageStatus=='notenoughdata'? 'Course code, semester and faculty Id are compulsory': 
            pageStatus=='conflict'? 'Course Already exists': 
            pageStatus=="unacceptable"? "Instructor doesn't exist": 
            pageStatus=='done'? 'Done. Try another submit': ''}</div>
          <button type="submit" style={{marginTop: '20px', width: '400px'}}>
            Register
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default RegisterCourse;
