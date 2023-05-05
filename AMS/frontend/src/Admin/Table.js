import React from 'react';
import './Table.css';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Student ID</th>
          <th>Student Name</th>
          <th>Reason for Leave</th>
          <th>Leave Approval Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.studentId}</td>
            <td>{item.studentName}</td>
            <td>{item.reasonForLeave}</td>
            <td>{item.leaveApprovalStatus}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;