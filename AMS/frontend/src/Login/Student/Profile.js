import React from 'react'
import ProfileCard from './ProfileCard'
import ProgressBar from './ProgressBar'
import Navbar from './Navbar'
function Profile(){
      
  return(
      <>
      
      <Navbar />
      <div style={{display: 'flex'}}>
        <div style={{display: 'inline-block', marginRight: '20px'}}>
          <ProfileCard/>
        </div>
        <div style={{display: 'inline-block'}}>
          <ProgressBar/>
        </div>
       
      </div>
      </>
    )
}

export default Profile