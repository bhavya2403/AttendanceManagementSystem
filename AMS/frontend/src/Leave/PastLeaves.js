import React, { useState, useEffect } from 'react';
import './PastLeaves.css';
import Card from '@mui/material/Card';
import LeaveNavbar from './LeaveNavbar';

function PastLeaves() {
  const [data, setData] = useState(null); // set initial state to null
  const [isLoading, setIsLoading] = useState(true); // add loading state

  async function sendingReq() {
    const response = await fetch("/leavemanage/get_leaves/", {
      method: 'POST',
      headers: {
        'token': `${window.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'id': `${window.id}`,
        'role': `${window.role}`,
      }),
    });
    const data_local = await response.json();
    setData(() => data_local);
    setIsLoading(() => false); // set loading state to false
  }
  useEffect(() => {
    sendingReq();
  }, []);

  return (
    <>
    {isLoading ? (
      <div>Loading...</div>
    ) : (
    <>
      <LeaveNavbar />
      <Card style={{ marginLeft: '375px', marginTop: '130px', height: '400px', width: '800px', overflow: 'auto', borderRadius: '14px', boxShadow: '0px 10px 30px black', backgroundColor: '#EDF1D6' }}>
        <div className="table-container" style={{ marginLeft: '55px', marginTop: '40px', marginBottom: '20px', borderRadius: '14px' }} >
          <h1 style={{marginLeft: '250px'}}>PAST LEAVES</h1><br /><br /><br />
          <table className="medical-table" style={{width: '700px'}}>
            <thead>
              <tr>
                <th className="medical-table th">Sr.No</th>
                <th className="medical-table th">Reason</th>
                <th className="medical-table th">Start Date</th>
                <th className="medical-table th">End Date</th>
                <th className="medical-table th" style={{width: '300px'}}>Approval Status</th>
              </tr>
            </thead>
            <tbody>
              {data && data.data.map((item, index) => (
                <tr key={index+1}>
                  <td className="medical-table td">{index+1}</td>
                  <td className="medical-table td">{item[3]}</td>
                  <td className="medical-table td">{item[5]}</td>
                  <td className="medical-table td">{item[6]}</td>
                  <td className="medical-table td" style={{width: '100px', color: item.approvalStatus === 'Approved' ? 'green' : item.approvalStatus === 'Denied' ? 'red' : 'orange' }}>
                    {item[7]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
    )}
    </>
  );
}

export default PastLeaves;
