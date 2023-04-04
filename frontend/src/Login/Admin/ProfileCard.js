import React from 'react'
import './ProfileCard.css'

// Displays the profile page of the user in the admin department
function ProfileCard(){
    return (
        <div className="card-container">
        <header>
          <img src="https://img.icons8.com/bubbles/100/000000/user.png"  />
        </header>
        <h1 className="bold-text">Name</h1>
        <h2 className='bold-text'>ID</h2>
        <h2 className = "bold-text">Admin Dept</h2>
              <br/><br/>
      </div>
    )
}

export default ProfileCard