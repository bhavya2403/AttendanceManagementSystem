import React from 'react'
import Navbar from './Navbar';
import Profile from './Profile'
import SeeCourses from './SeeCourses';
import MedicalForm from './MedicalForm';
import {Routes, Route } from 'react-router-dom';

function Student(){
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/Profile"  element={<Profile/>}/>
          <Route path="/SeeCourses"  element={<SeeCourses />} />   
          <Route path="/MedicalForm" element={<MedicalForm/>}/>  
        </Routes>
      </div>
    );
}

export default Student