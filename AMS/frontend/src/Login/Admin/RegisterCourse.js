import React, { useState } from "react";
import './RegisterCourse.css'

function CourseRegistrationForm() {
  const [courseName, setCourseName] = useState("");
  const [Courseinstructor, setCoureInstructor] = useState("");
  const [courseID, setCourseID] = useState("");
  const [department, setDepartment] = useState("");
  const [coursedescription, setCoursedescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Course: ${courseName}\nCourseInstructor: ${Courseinstructor}\ncourseID: ${courseID}\nCoursedescription: ${coursedescription}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Course Name:
        <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
      </label>
      <br />
      <label>
        Course Instructor:
        <input type="text" value={Courseinstructor} onChange={(e) => setCoureInstructor(e.target.value)} />
      </label>
      <br />
      <label>
        Course ID:
        <input type="courseID" value={courseID} onChange={(e) => setCourseID(e.target.value)} />
      </label>
      <br />
      <label>
        Department:
        <input type="department" value={department} onChange={(e) => setDepartment(e.target.value)} />
      </label>
      <br />
      <label>
        Course descriptiom:
        <textarea value={coursedescription} className="description" onChange={(e) => setCoursedescription(e.target.value)} placeholder="Course description"></textarea>
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default CourseRegistrationForm;