import React, {useState} from 'react';
import "./Login.css";
import { json, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const csrftoken = Cookies.get('csrftoken');

function Login(){
    

    const navigate = useNavigate();

    const [email,setEmail] = useState(""); //used for taking the email value and setting it 
    const [password,setPassword] = useState(""); //used for taking the password value and setting it
    const [radio, setRadio] = useState({isChecked: ""});
    function radioHandler(event) {
        setRadio({ isChecked: event.target.value });
      }
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
                headers: { //
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                body: JSON.stringify({
                    'email': email,
                    'password': password,
                    'role': 'admin',
                })
            }
            console.log(requestOptions);
            // send request to backend and wait for the response
            const response = await fetch("/auth/login/", requestOptions);
            console.log(response.body);
            const data = await response.json();
            console.log(data);
            if(response.status === 200 && response.body.token === requestOptions.body.password){
                if(radio.isChecked==='Student')navigate('/Student');
                if(radio.isChecked==='Faculty')navigate('./faculty');
                if(radio.isChecked==='Admin')navigate('./admin');
            }
            console.log(response);
        } catch (error) {
            console.log(error)
            // an error occured
        }
    
        setEmail('');
        setPassword('');
        setRadio({isChecked: ""});

    };
    //200 ok 401 unauthorized 
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
                    <div style={{display: 'flex', flexDirection: 'row'}} onChange={radioHandler}>
                        <input type="radio" value="Student" name="role" style={{marginRight: '4px'}} required/>Student
                        <div style={{marginRight: '20px'}}/>
                        <input type="radio" value="Faculty" name="role" style={{marginRight: '4px'}} required/> Faculty
                        <div style={{marginRight: '20px'}}/>
                        <input type="radio" value="Admin" name="role" style={{marginRight: '4px'}} required/> Admin
                    </div>
                    <div className="d-grid" style={{marginTop: '30px'}}>
                    <button type="submit" style={{width: '100px'}} >Submit</button> 
                    </div>
                </form>
                </div>
            </div>

        </div>
    )
}


export default Login