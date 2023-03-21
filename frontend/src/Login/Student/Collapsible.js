import React, {useState} from 'react'
import './Collapsible.css'
function Collapsible(props){
    
    const[isCollapsed, setIsCollapsed] = useState(true);
    const toggleState = () => {
        setIsCollapsed(!isCollapsed);
    }
    
    return (
        <div className="collapsible" key={props.id} style={{marginTop: "10px", marginLeft: "10px", marginRight: "10px"}}>
            <div className="collapsible-header" onClick={toggleState}>
                <b>{props.courseName}</b>
            </div>
                {!isCollapsed && (<div className="collapsible-body">
                    <h5>{props.professorName}</h5>
                    {props.content}
                    </div>
                )}
        </div>
    )
}

export default Collapsible