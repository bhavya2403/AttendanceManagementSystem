import React from 'react'
import './ProfileCard.css'

function ProfileCard(props){
  console.log("data at profile card: " )
  console.log(props)
    return (
        <div className="studentcard-container" style={{marginTop: '80px'}}>
        <header>
          <img src="https://img.icons8.com/bubbles/100/000000/user.png"/>
        </header>
        <h1 className="bold-text">{props.sData.name}</h1>
        {console.log("waiting here somehow")}
        <h2 className="bold-text">{props.sData.batch}</h2>
            <br/><br/>
        <h2 className='bold-text'>{props.sData.id}</h2>
      </div>
    )
}


export default ProfileCard