import React from 'react'
import ProfileCard from './ProfileCard'

function Profile(){
    return(
      <div style={{display: 'flex'}}>
        <div style={{display: 'inline-block', marginRight: '20px'}}>
          <ProfileCard/>
        </div>
        <div style={{display: 'inline-block'}}>
          <ProgressBar/>
        </div>
      </div>
    )
}

export default Profile