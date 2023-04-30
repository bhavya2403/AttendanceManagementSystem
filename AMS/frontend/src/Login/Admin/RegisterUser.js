import React from 'react';
import './Registration.css';

function Registration(){
    
    return (
        <div className="main">
        <div className="login-wrap">
        <div className="login-html">
            <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">Student</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab">Faculty</label>
            <div className="login-form">
                <div className="sign-in-htm">
                    <div className="group">
                        <label for="user" className="label">ID</label>
                        <input id="user" type="text" className="input" />
                    </div>
                    <div className="group">
                        <label for="user" className="label">Email</label>
                        <input id="user" type="text" className="input" data-type="input" />
                    </div>
                    <div className="group">
                        <label for="user" className="label">Name</label>
                        <input id="user" type="text" className="input" data-type="input" />
                    </div>
                    <div className="group">
                        <label for="user" className="label">Batch</label>
                        {/* <input id="user" type="text" className="input" data-type="input" /> */}
                        <select >
                        <option value="">Select a course</option>
                        <option value="React 101">Batch I</option>
                        <option value="Node.js Basics">Batch II</option>
                        <option value="JavaScript Fundamentals">Batch III</option>
                        <option value="JavaScript Fundamentals">Batch IV</option>
                        </select>
                    </div>
                    <div className="group">
                        <label for="pass" className="label">Password</label>
                        <input id="pass" type="password" className="input" data-type="password" />
                    </div>
                    <br/>
                    <div className="group">
                        <input type="submit" className="button" value="Register" />
                    </div>
                    
                    
                </div>
                <div className="sign-up-htm">
                <div className="group">
                        <label for="user" className="label">ID</label>
                        <input id="user" type="text" className="input" />
                    </div>
                    <div className="group">
                        <label for="user" className="label">Email</label>
                        <input id="user" type="text" className="input" data-type="input" />
                    </div>
                    <div className="group">
                        <label for="user" className="label">Name</label>
                        <input id="user" type="text" className="input" data-type="input" />
                    </div>
                    <div className="group">
                        <label for="user" className="label">Age</label>
                        <input id="user" type="text" className="input" data-type="input" />
                    </div>
                    <div className="group">
                        <label for="user" className="label">Gender</label>
                        {/* <input id="user" type="text" className="input" data-type="input" /> */}
                        <select >
                        <option value="">Select your Gender</option>
                        <option value="React 101">Male</option>
                        <option value="Node.js Basics">Female</option>
                        <input type="radio" value="student" name="role" style={{marginRight: '4px'}} required/>Student
                        </select>
                    </div>
                    <div className="group">
                        <label for="user" className="label">Post</label>
                        <input id="user" type="text" className="input" data-type="input" />
                    </div>
                    <div className="group">
                        <label for="pass" className="label">Password</label>
                        <input id="pass" type="password" className="input" data-type="password" />
                    </div>
                    <br/>
                    <div className="group">
                        <input type="submit" className="button" value="Register" />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
    )
  }

  export default Registration;