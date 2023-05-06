import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AdminProfile from "./Admin/AdminProfile";
import BatchList from "./Admin/BatchList";
import RegisterUser  from "./Admin/RegisterUser";
import RegisterCourse from "./Admin/RegisterCourse";
import FacultyList from "./Admin/facultylist";
import LeaveManagement from "./Admin/LeaveManagement";
import RegisterStudentCourse from "./Admin/RegisterStudentCourse";

function AdminRoutes() {
    console.log(useLocation());
    return (
        <>
            <Routes>
                <Route index element={<AdminProfile />} />
                <Route path="RegisterUser"  element={<RegisterUser/>} /> 
                <Route path="RegisterCourse"  element={<RegisterCourse/>} /> 
                <Route path="RegisterStudentCourse"  element={<RegisterStudentCourse/>} />
                <Route path="Facultylist"  element={<FacultyList/>} /> 
                <Route path="BatchList"  element={<BatchList/>} /> 
                <Route path="LeaveManagement"  element={<LeaveManagement/>} />
            </Routes>
        </>
    );
}

export default AdminRoutes;