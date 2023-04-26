import React from 'react'
import './ProfileCard.css'

function ProfileCard(props){
    return (
        <div className="studentcard-container">
        <header>
          <img src="https://img.icons8.com/bubbles/100/000000/user.png"/>
        </header>
        <h1 className="bold-text">{props.name}</h1>
        <h2 className="bold-text">{props.batch}</h2>
            <br/><br/>
        <h2 className='bold-text'>{props.id}</h2>
      </div>
    )
}

export default ProfileCard