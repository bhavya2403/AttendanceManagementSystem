import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import ProgressBar from './ProgressBar';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import { SelectProvider } from '@mui/base';


 function Profile(props) {
  // declaring the states
  const [data, setData] = useState("");

  // declaring location, token, csrf, promise, data, requestoptions
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
  let data_local;

  console.log("just before function");
  async function sendingReq() {
    try{

    console.log("before calling");
    const response = await fetch("/student/", requestOptions);
    console.log("after calling");
    data_local = await response.json();
    setData(data_local);
    console.log(data);
    console.log("after function");
  }catch (err)
    {
    }
  }
  sendingReq()
 return (
      <>
        <p>{data.toString()} </p>
        {/*<div style={{ display: 'flex' }}>*/}
        {/*  <div style={{ display: 'inline-block', marginRight: '20px' }}>*/}
        {/*    <ProfileCard sData={data} />*/}
        {/*  </div>*/}
        {/*  <div style={{ display: 'inline-block' }}>*/}
        {/*    <ProgressBar sData={data}/>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </>
    )
  // } 
  // else {
  //   return <div>loadoing</div>;
  // }
}


export default Profile;
