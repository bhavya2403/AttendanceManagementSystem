import './App.css';
import Login from './Login/Login';
import StudentRoutes from './StudentRoutes';
import FacultyRoutes from './FacultyRoutes';
import LeaveManageRoutes from './LeaveManageRoutes';
// import AdminRoutes from './AdminRoutes';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student/*" element={<StudentRoutes />} />
        <Route path="/faculty/*" element={<FacultyRoutes />} />
        {/* <Route path="/admin/*" element={<AdminRoutes />} /> */}
        <Route path="/leavemanage/*" element={<LeaveManageRoutes />} />
      </Routes>
    </>
  );
}

export default App;
