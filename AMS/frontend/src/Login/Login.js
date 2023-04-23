import React, {useState} from 'react';
import "./Login.css";
import Student from './Student/Student';
import { json, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const csrftoken = Cookies.get('csrftoken');

function Login(){
    

    const navigate = useNavigate();

    const [email,setEmail] = useState(""); //used for taking the email value and setting it 
    const [password,setPassword] = useState(""); //used for taking the password value and setting it

    const emailHandler=(event)=>{ //es6 function
        setEmail(event.target.value); //function to save email as we write it
    };

    function passwordHandler(event){
        setPassword(event.target.value); //function to save password as we write it
    };

    let onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                body: JSON.stringify({
                    'email': '202001067@daiict.ac.in',
                    'password': 'bhavya',
                    'role': 'student'
                })
                }
            // send request to backend and wait for the response
            const response = await fetch("/auth/login/", requestOptions);
            const data = await response.json();
            if(response.ok){
                navigate('/Student');
            }
            console.log(response);
        } catch (error) {
            // an error occured
        }
    
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <div className="login-container">
                <h1 style={{color:'black'}}>Welcome</h1><br/><br/>
                <div className="login-card">
                <form onSubmit={onSubmitHandler}>
                    <h3 style={{textAlign: "center"}}>Sign in</h3><br/>
                    <div className="mb-3">
                        <label>Enter Email Address</label>
                        <input type="email" className="form-control" id="email" required value={email} onChange={emailHandler}/>
                    </div>
                    <div className="mb-3">
                        <label>Enter Password</label>
                        <input type="password" className="form-control" id="password" required value={password} onChange={passwordHandler}/>
                    </div><br/>
                    <div className="d-grid">
                    <button type="submit" className="btn btn-primary" >Submit</button> 
                    </div>
                </form>
                </div>
            </div>

        </div>
    )
}


export default Login