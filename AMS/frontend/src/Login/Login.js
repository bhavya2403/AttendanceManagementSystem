import React, { useState} from 'react';
import "./Login.css";
import { Link, Outlet, json, useNavigate} from "react-router-dom";
import { NavItem } from 'react-bootstrap';


function Login(){
    // declare states
    const [email,setEmail] = useState(""); 
    const [password,setPassword] = useState(""); 
    const [radio, setRadio] = useState("");
    const [pageStatus, setPageStatus] = useState('noloading');
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    // change states
    let onSubmitHandler = async (event) => {
        event.preventDefault();
        setPageStatus('loading');
        const response = await fetch('/auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'id': email,
                'password': password,
                'role': (radio=='faculty')? 'instructor': radio
            })
        });
        if (!response) {}
        else if (response.status==401) setPageStatus('unauthorized');
        else {
            const data = await response.json();
            setToken(() => data.token);
            window.token = data.token;
            window.role = radio;
        }
    };
    
    // check states
    if (token) navigate(`/${window.role}/`);
    return (
        <div className="login-container">
            <h1 style={{color:'black'}}>Welcome</h1><br/><br/>
            <div className="login-card">
            <form onSubmit={onSubmitHandler}>
                <h3 style={{textAlign: "center"}}>Sign in</h3><br/>
                <div className="mb-3">
                    <label>Enter College ID</label>
                    <input type="text" className="form-control" id="email" required value={email} onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className="mb-3">
                    <label>Enter Password</label>
                    <input type="password" className="form-control" id="password" required value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div><br/>
                <div style={{display: 'flex', flexDirection: 'row'}} onChange={(event) => setRadio(event.target.value)}>
                    <input type="radio" value="student" name="role" style={{marginRight: '4px'}} required/>Student
                    <div style={{marginRight: '20px'}}/>
                    <input type="radio" value="faculty" name="role" style={{marginRight: '4px'}} required/> Faculty
                    <div style={{marginRight: '20px'}}/>
                    <input type="radio" value="admin" name="role" style={{marginRight: '4px'}} required/> Admin
                </div>
                <div>{pageStatus=='loading'? "Please wait while loading..." : pageStatus=='unauthorized'? "Enter correct data": ''}</div>
                <button type="submit" disabled={pageStatus=='loading'} style={{width: '100px', marginTop: '20px'}} >Submit</button> 
            </form>
            </div>
        </div>
    )
}


export default Login