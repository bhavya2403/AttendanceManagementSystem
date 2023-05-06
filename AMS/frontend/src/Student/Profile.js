import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import ProgressBar from './ProgressBar';
import Navbar from './Navbar';
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

function Profile(props) {
  // declaring the states
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true); // add loading state
  console.log(window.token);

  const requestOptions = {
    method: 'POST',
    headers: {
      'token': `${window.token}`,
      'Content-Type': 'application/json',
    }
  };

  async function sendingReq() {
    const response = await fetch("/student/", requestOptions);
    const data_local = await response.json();
    setData(() => data_local);
    setIsLoading(false); // set loading state to false
  }
  useEffect(() => {
    sendingReq();
  }, []);

  return (
    <>
      <Navbar/>
      {isLoading? (<div>Loading, please wait...</div>): (
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'inline-block', marginRight: '20px' }}> 
            <ProfileCard sData={data} />
          </div>
          <div style={{ display: 'inline-block' }}>
            <ProgressBar sData={data}/>
          </div>
        </div>
      )}
    </>
  );
}
export default Profile

