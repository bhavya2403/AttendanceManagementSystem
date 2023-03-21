import React from 'react'
import './ProfileCard.css'

function ProfileCard(){
    return (
        <div className="card-container">
        <header>
          <img src="https://img.icons8.com/bubbles/100/000000/user.png"  />
        </header>
        <h1 className="bold-text">Sahil Kothari</h1>
        <h2 className="bold-text">B-Tech III</h2>
              <br/><br/>
        <h2 className='bold-text'>202001112</h2>
      </div>
    )
}

export default ProfileCard