import React, { useState } from "react";
import './RegisterCourse.css'

function CourseRegistrationForm() {
  const [courseName, setCourseName] = useState("");
  const [Courseinstructor, setCoureInstructor] = useState("");
  const [courseID, setCourseID] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setsemester] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // formData.append('file', file);

    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'token': `${window.token}`,
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({
          
          // 'file': file,
            'code': courseID,
            'semester': semester,
            'name': courseName,
            'department': department,
            'instructor': Courseinstructor,
            'description': "",  

        }),
      }
      
      const response = await fetch("admin/register_course/", requestOptions);
      const data = await response.json();
      if (response.ok) {
          console.log(response);
      }
      console.log(response);
    } catch (error) {

    }

    // console.log(`Course: ${courseName}\nCourseInstructor: ${Courseinstructor}\ncourseID: ${courseID}\nsemester: ${semester}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Course Name:
        <input id="cname" type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
      </label>
      <br />
      <label>
        Course Instructor:
        <input id="cinstruct" type="text" value={Courseinstructor} onChange={(e) => setCoureInstructor(e.target.value)} />
      </label>
      <br />
      <label>
        Course ID:
        <input id="cid" type="courseID" value={courseID} onChange={(e) => setCourseID(e.target.value)} />
      </label>
      <br />
      <label>
        Department:
        <input id="dep" type="department" value={department} onChange={(e) => setDepartment(e.target.value)} />
      </label>
      <br />
      <label>
        Semester:
        <input id="dep" type="department" value={semester} onChange={(e) => setsemester(e.target.value)} />
      </label>
      <br />
      {/* <label>
        Semester:
        <textarea id="desc" value={semester} className="description" onChange={(e) => setsemester(e.target.value)} placeholder="Semester"></textarea>
      </label>
      <br /> */}
      <button type="submit">Register</button>
    </form>
  );
}

export default CourseRegistrationForm;