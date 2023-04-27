import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import ProgressBar from './ProgressBar';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import { SelectProvider } from '@mui/base';


function Profile(props) {
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(true); // add loading state

  // declaring the states
  const [data, setData] = useState("");

=======
  const [data, setData] = useState(null); // set initial state to null
  const [isLoading, setIsLoading] = useState(true); // add loading state
>>>>>>> 24f4fee7dadc73375648d4c6021f1efa68d1a614
  const location = useLocation();
  const token = location?.state?.token;
  const csrftoken = location?.state?.csrftoken;
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
<<<<<<< HEAD
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

   




=======
      <>
        {isLoading ? (
            <div>Loading...</div>
        ) : (
            <>
              <Navbar/>
              <div style={{display: 'flex'}}>
                <div style={{display: 'inline-block', marginRight: '20px'}}>
                  <ProfileCard sData={data}/>
                </div>
                <div style={{display: 'inline-block'}}>
                  <ProgressBar sData={data}/>
                </div>
              </div>
            </>
        )}
      </>
  )
}

export default Profile;
>>>>>>> 24f4fee7dadc73375648d4c6021f1efa68d1a614
