import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import ProgressBar from './ProgressBar';
import Navbar from './Navbar';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { SelectProvider } from '@mui/base';


function Profile(props) {
  // delclaring location, token, csrf, promise, data, requestoptions
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
  let data;

  console.log("just before function");
  (async function sendingReq() {
    console.log("before calling");
    const response = await fetch("/student/", requestOptions);
    console.log("after calling");
    data = await response.json();
    console.log(data);
  })();
  console.log("after function");
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'inline-block', marginRight: '20px' }}>
          <ProfileCard sData={data} />
        </div>
        <div style={{ display: 'inline-block' }}>
          <ProgressBar sData={data}/>
        </div>
      </div>
    </>
  );
  // } 
  // else {
  //   return <div>loadoing</div>;
  // }
}


export default Profile;
