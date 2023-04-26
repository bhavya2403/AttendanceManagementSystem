import React from 'react'
import ProfileCard from './ProfileCard'
import ProgressBar from './ProgressBar'
import Navbar from './Navbar'
import {useEffect, useState} from "react"
import { useLocation } from 'react-router-dom'
function Profile(props){
  const location = useLocation();
  const token = location?.state?.token;
  const csrftoken = location?.state?.csrftoken;
  console.log(token);

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const requestOptions =  {
        method: 'POST',
        headers : {
          'token': `${token}`,
          'X-CSRFToken': csrftoken
        }
      }
      const reponse = await fetch("/student/", requestOptions);
      const data = await reponse.json();
      setData(data);
    }
    fetchData();
  }, []);
  console.log(data);

  return(
      <>
      
      <Navbar />
      <div style={{display: 'flex'}}>
        <div style={{display: 'inline-block', marginRight: '20px'}}>
          <ProfileCard data={data}/>
        </div>
        <div style={{display: 'inline-block'}}>
          <ProgressBar data={data}/>
        </div>
       
      </div>
      </>
    )
}

export default Profile