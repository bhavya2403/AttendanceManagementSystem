import React from 'react';
import './ViewCourses.css';

const courses = [
  {
    title: 'Introduction to React',
    description: 'Learn the basics of React and how to build web applications with it.',
  },
  {
    title: 'Advanced React',
    description: 'Take your React skills to the next level with advanced topics such as Redux and server-side rendering.',
  },
  {
    title: 'React Native',
    description: 'Learn how to use React to build native mobile applications for iOS and Android.',
  },
];

function ViewCourses() {
  return (
    <div className="ViewCourses">
      <h1>Courses Offered</h1>
      <div className="course-list">
        {/* {courses.map(course => <Course title={course.title} description={course.description} />)} */}
        {courses.map(courses => <div className="Course">
                    <h2>{courses.title}</h2>
                    <h6>{courses.description}</h6>
                    </div>)}
      </div>
    </div>
  );
}

export default ViewCourses;