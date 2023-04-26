import React from 'react'
import './ProgressBar.css'
function ProgessBar() {
    return (

        <div className="card" style={{ backgroundColor: '#EDF1D6', width: '990px', height: '650px', marginTop: '20px', borderRadius: '14px', boxShadow: '0px 10px 30px black' }}>
            <div className="card-body" > {/*used for padding content inside the card element */}
                <h1 className="d-flex align-items-center mb-3" style={{ paddingBottom: '10px' }}>Attendance</h1>
                <h2>Human Computer Interaction</h2>
                <div className="progress mb-4">
                    <div className="progress-bar custom-progress-bar" height="20px" role="progressbar" style={{ width: '80%', borderRadius: '10px' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                        <span style={{ textAlign: 'right' }}>80%</span> {/*span element is rendered inside the container it is declared as it is the child element of the div element. Text inside span is positioned using by default css styles of the span element. It is given an attribute 'position: absolute' which makes it positioned relative to the parent element*/}
                    </div>
                </div>
                <h2>Software Engineering</h2>
                <div className="progress mb-4">
                    <div className="progress-bar custom-progress-bar" label="72% completed" role="progressbar" style={{ width: '72%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100">
                        <span style={{ textAlign: 'right' }}>72%</span>
                    </div>
                </div>
                <h2>Introduction to Robotics</h2>
                <div className="progress mb-4">
                    <div className="progress-bar custom-progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">
                        <span style={{ textAlign: 'right' }}>89%</span>
                    </div>
                </div>
                <h2>Distributed Systems</h2>
                <div className="progress mb-4">
                    <div className="progress-bar custom-progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100">
                        <span style={{ textAlign: 'right' }}>55%</span>
                    </div>
                </div>
                <h2>Introduction to Cryptography</h2>
                <div className="progress mb-4">
                    <div className="progress-bar custom-progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100">
                        <span style={{ textAlign: 'right' }}>66%</span>
                    </div>
                </div>
                <h2>Indian Cinema</h2>
                <div className="progress mb-4">
                    <div className="progress-bar custom-progress-bar" role="progressbar" style={{ width: '45%' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
                        <span style={{ textAlign: 'right' }}>45%</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProgessBar
