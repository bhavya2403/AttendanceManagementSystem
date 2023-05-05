import React from 'react';
import Table from './Table';
import AdminNavbar from './AdminNavbar';

const data = [
  {
    id: 1,
    studentId: '001',
    studentName: 'John Doe',
    reasonForLeave: 'Sick leave',
    leaveApprovalStatus: 'Approved',
  },
  {
    id: 2,
    studentId: '002',
    studentName: 'Jane Smith',
    reasonForLeave: 'Personal leave',
    leaveApprovalStatus: 'Pending',
  },
  {
    id: 3,
    studentId: '003',
    studentName: 'Bob Johnson',
    reasonForLeave: 'Vacation',
    leaveApprovalStatus: 'Rejected',
  },
];

const Display = () => {
  return (
    <>
    {/* <AdminNavbar/> */}
    <div>
      <Table data={data} />
    </div>
    </>
  );
};

export default Display;