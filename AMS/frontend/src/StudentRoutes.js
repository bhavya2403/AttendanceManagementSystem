import React from "react";
import Profile from './Student/Profile';
import SeeCourses from "./Student/SeeCourses";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';


function StudentRoutes() {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <Routes>
                <Route index element={<Profile />} />
                <Route path="view_courses/" element={<SeeCourses />} />
            </Routes>
        </>
    );

}

export default StudentRoutes;