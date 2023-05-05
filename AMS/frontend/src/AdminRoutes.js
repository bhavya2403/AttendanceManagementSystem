import React from "react";
import Admin from "./Admin/Admin";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AdminRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<Admin />} />
                {/* <Route path="/view_courses" element={<SeeCourses />} /> */}
            </Routes>
        </>
    );
}

export default AdminRoutes;