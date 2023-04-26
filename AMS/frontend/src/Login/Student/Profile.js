import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import ProgressBar from './ProgressBar';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import { SelectProvider } from '@mui/base';


function Profile(props) {
<<<<<<< HEAD
  const [data, setData] = useState(null); // set initial state to null
  const [isLoading, setIsLoading] = useState(true); // add loading state
=======
  // declaring the states
  const [data, setData] = useState("");
>>>>>>> 71f8d8a12a74a86a4f5a91c7183c704af382458e

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
<<<<<<< HEAD
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
=======

      console.log("before calling");
      const response = await fetch("/student/", requestOptions);
      console.log("after calling");
      data_local = await response.json();
      setData(data_local);
      console.log(data);
      console.log("after function");
    } catch (err) {
    }
  }
  sendingReq()
  return (
    <>
      <p>{data.toString()} </p>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'inline-block', marginRight: '20px' }}>
          <ProfileCard sData={data} />
        </div>
        <div style={{ display: 'inline-block' }}>
          <ProgressBar sData={data} />
        </div>
      </div>
    </>
  )
  // } 
  // else {
  //   return <div>loadoing</div>;
  // }
>>>>>>> 71f8d8a12a74a86a4f5a91c7183c704af382458e
}



export default Profile;
