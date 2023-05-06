import React, { useState, useEffect } from 'react';
import AdminNavbar from './AdminNavbar'
import './LeaveManagement.css'

function LeaveManagement() {
  // const [leaveData, setLeaveData] = useState([
  //   { id: 1, name: 'John', role: 'Developer', reason: 'Vacation', status: 'Pending' },
  //   { id: 2, name: 'Jane', role: 'Designer', reason: 'Personal', status: 'Pending' },
  //   { id: 3, name: 'Bob', role: 'Manager', reason: 'Sick', status: 'Pending' },
  //   { id: 4, name: 'John', role: 'Developer', reason: 'Vacation', status: 'Pending' },
  //   { id: 5, name: 'Jane', role: 'Designer', reason: 'Personal', status: 'Pending' },
  //   { id: 6, name: 'Bob', role: 'Manager', reason: 'Sick', status: 'Pending' },
  //   { id: 7, name: 'John', role: 'Developer', reason: 'Vacation', status: 'Pending' },
  //   { id: 8, name: 'Jane', role: 'Designer', reason: 'Personal', status: 'Pending' },
  //   { id: 9, name: 'Bob', role: 'Manager', reason: 'Sick', status: 'Pending' }
  // ]);
  const [leaveData, setLeaveData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function sendingReq() {
    const response = await fetch("/leavemanage/get_leaves/", {
      method: 'POST',
      headers: {
        'token': `${window.token}`,
        'Content-Type': 'application/json',
      }
    });
    const data_local = await response.json();
    setLeaveData(() => data_local.data);
    setIsLoading(() => false);
  }
  useEffect(() => {
    sendingReq();
  }, []);

  const handleActionClick = async (id, action) => {
    const updatedLeaveData = leaveData.map(leave => {
      if (leave.id === id) {
        return {
          ...leave,
          status: action
        }
      }
      return leave;
    });

    setIsLoading(true);
    const response = await fetch("/leavemanage/change_status/", {
      method: 'POST',
      headers: {
        'token': `${window.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'leave_id': id,
        'change_to': action
      })
    })
    if (response) {
      setIsLoading(false);
      setLeaveData(() => updatedLeaveData);
    }
  }
  const handleRemoveClick = () => {
    const updatedLeaveData = leaveData.filter(leave => leave.status === 'pending');
    setLeaveData(updatedLeaveData);
  }

  return (
    <>
    <AdminNavbar/>
    {isLoading? (<div>Please wait....</div>): 
      <div className="leave-card">
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>ID</th>
              <th>Role</th>
              <th>Leave Type</th>
              <th>Report</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leaveData.map((leave, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{leave.user_id}</td>
                <td>{leave.role}</td>
                <td>{leave.leave_type}</td>
                <td>{leave.report}</td>
                <td>{leave.start_date}</td>
                <td>{leave.end_date}</td>                
                <td>
                  {leave.status === 'pending' ? (
                    <>
                      <div className="button-container">
                      <button  onClick={() => handleActionClick(leave.id, 'approved')}>Approve</button>
                      <button onClick={() => handleActionClick(leave.id, 'rejected')}>Reject</button>
                      </div>
                    </>
                  ) : (
                    leave.status
                  )}
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleRemoveClick}>Remove Approved/Rejected Leaves</button>
      </div>
    }
    </>
  );
}
export default LeaveManagement
