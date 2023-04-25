import React from 'react'
import LeaveNavbar from './LeaveNavbar';
import MedicalForm from './MedicalForm';
import { Routes, Route } from 'react-router-dom';
import PastLeaves from './PastLeaves';
function Leave() {
    return (
        <>
        <LeaveNavbar/>
        <Routes>
            <Route path="/MedicalForm" element={<MedicalForm />} />
            <Route path="/PastLeaves" element={<PastLeaves/>}/>
        </Routes>
      </>
    )
}

export default Leave;