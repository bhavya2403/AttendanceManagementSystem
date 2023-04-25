import React from 'react';
import './PastLeaves.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LeaveNavbar from './LeaveNavbar';
function PastLeaves() {
  const data = [
    {
      id: '1',
      reason: 'Back pain',
      Sdate: '2022-04-01',
      Edate: '2022-04-03',
      approvalStatus: 'Approved'
    },
    {
      id: '2',
      reason: 'Fever',
      Sdate: '2022-05-05',
      Edate: '2022-04-03',
      approvalStatus: 'Pending'
    },
    {
      id: '3',
      reason: 'Headache',
      Sdate: '2022-06-10',
      Edate: '2022-04-03',
      approvalStatus: 'Denied'
    }
  ];

  return (
    <>
      <LeaveNavbar />
      <Card style={{ marginLeft: '350px', marginTop: '10px', height: '400px', width: '750px', borderRadius: '14px', boxShadow: '0px 10px 30px black', backgroundColor: '#EDF1D6' }}>
        <div className="table-container" style={{ marginLeft: '75px', marginTop: '50px' }} >
          <table className="medical-table">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Reason</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Approval Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.reason}</td>
                  <td>{item.Sdate}</td>
                  <td>{item.Edate}</td>
                  <td style={{ color: item.approvalStatus === 'Approved' ? 'green' : item.approvalStatus === 'Denied' ? 'red' : 'orange' }}>
                    {item.approvalStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}

export default PastLeaves;
