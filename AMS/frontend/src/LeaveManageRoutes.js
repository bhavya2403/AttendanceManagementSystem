import React from "react";
import MedicalForm from "./Leave/MedicalForm";
import { Routes, useLocation, Route } from 'react-router-dom';
import PastLeaves from "./Leave/PastLeaves";


function LeaveManageRoutes() {
    console.log(useLocation());
    return (
        <>
            <Routes>
                <Route path='medicalform/' element={<MedicalForm />} />
                <Route path='get_leaves/' element={<PastLeaves />} />
            </Routes>
        </>
    )

}

export default LeaveManageRoutes;