import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import ProgressBar from './ProgressBar';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import { SelectProvider } from '@mui/base';

function Profile(props) {

  // declaring the states
  const [data, setData] = useState("");

  const [isLoading, setIsLoading] = useState(true); // add loading state
  const location = useLocation();
  const token = location?.state?.token;
  const csrftoken = location?.state?.csrftoken;
  window.token = token;
  const requestOptions = {
    method: 'POST',
    headers: {
      'token': `${token}`,
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken
    }
  };

  async function sendingReq() {
    try {
      const response = await fetch("/student/", requestOptions);
      const data_local = await response.json();
      setData(data_local);
      setIsLoading(false); // set loading state to false
    } catch (err) {
      setIsLoading(false); // set loading state to false in case of error
    }
  }

  useEffect(() => {
    sendingReq();
  }, []); // call sendingReq only once, when the component mounts

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Navbar/>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'inline-block', marginRight: '20px' }}> 
              <ProfileCard sData={data} />
            </div>
            <div style={{ display: 'inline-block' }}>
              <ProgressBar sData={data}/>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Profile

