import React from "react";
import FacultyProfile  from './Faculty/FacultyProfile';
import Courses from "./Faculty/Courses";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AttendanceSheet from "./Faculty/AttendanceSheet";
import ViewAttendance from "./Faculty/ViewAttendance";

function FacultyRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<FacultyProfile />} />
                <Route path="/view_courses/" element={<Courses />} />
                <Route path="/view_courses/attendance_page/" element={<AttendanceSheet />} />
                <Route path="/view_courses/view_attendance/" element={<ViewAttendance />} />
            </Routes>
        </>
    );
}

export default FacultyRoutes;