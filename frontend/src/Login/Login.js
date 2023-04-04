import React, {useState} from 'react';
import "./Login.css";
import Student from './Student/Student';
import { useNavigate } from "react-router-dom";

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

    function onSubmitHandler(event){
        event.preventDefault();
        console.log("Email", email);
        console.log("Password", password); //on submitting the form printing the email and password in console
        
        if(email==='202001112@daiict.ac.in' && password==='Sahil14#$'){
            navigate('/Student');
        }

        if(email==='kotharisahil4@gmail.com' && password==='123456789'){
            navigate('/Faculty');
        }

        setEmail("");
        setPassword("");
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