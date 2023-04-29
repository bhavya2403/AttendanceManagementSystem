import React from 'react'
import './ProgressBar.css'
function ProgessBar(props) {
    console.log(props);
    return (

        <div className="card" style={{ backgroundColor: '#EDF1D6', width: '990px', height: '650px', marginTop: '20px', borderRadius: '14px', boxShadow: '0px 10px 30px black' }}>
            <div className="card-body" > {/*used for padding content inside the card element */}
                <h1 className="d-flex align-items-center mb-3" style={{ paddingBottom: '10px' }}>Attendance</h1>
                <h2>{props.sData.courses[0][0]}</h2>
                <div className="progress mb-4">                                                   
                    <div className="progress-bar custom-progress-bar" label={`${props.sData.courses[0][1]}%`} role="progressbar" style={{ width: `${props.sData.courses[0][1]/parseFloat(props.sData.courses[0][2])*100}%`}} aria-valuenow={parseInt(props.sData.courses[0][1])} aria-valuemin="0" aria-valuemax={parseInt(props.sData.courses[0][2])}>
                        <span style={{ textAlign: 'right' }}>{`${props.sData.courses[0][1]/parseFloat(props.sData.courses[0][2])*100}%`}</span>
                    </div>
                </div>
                <h2>{props.sData.courses[1][0]}</h2>
                <div className="progress mb-4">
                    <div className="progress-bar custom-progress-bar" label={`${props.sData.courses[1][1]}%`} role="progressbar" style={{ width: `${props.sData.courses[1][1]/parseFloat(props.sData.courses[1][2])*100}%`}} aria-valuenow={parseInt(props.sData.courses[1][1])} aria-valuemin="0" aria-valuemax={parseInt(props.sData.courses[1][1])}>
                        <span style={{ textAlign: 'right' }}>{`${props.sData.courses[1][1]/parseFloat(props.sData.courses[1][2])*100}%` + "%"}</span>
                    </div>
                </div>
                <h2>{props.sData.courses[2][0]}</h2>
                <div className="progress mb-4">
                    <div className="progress-bar custom-progress-bar" label={`${props.sData.courses[2][1]}%`} role="progressbar" style={{ width: `${props.sData.courses[2][1]/parseFloat(props.sData.courses[2][2])*100}%`}} aria-valuenow={parseInt(props.sData.courses[2][1])} aria-valuemin="0" aria-valuemax={parseInt(props.sData.courses[2][2])}>
                        <span style={{ textAlign: 'right' }}>{`${props.sData.courses[2][1]/parseFloat(props.sData.courses[2][2])*100}%`}</span>
                    </div>
                </div>
                <h2>{props.sData.courses[3][0]}</h2>
                <div className="progress mb-4">
                    <div className="progress-bar custom-progress-bar" role="progressbar" label={`${props.sData.courses[3][1]}%`} style={{ width: `${props.sData.courses[3][1]/parseFloat(props.sData.courses[3][2])*100}%` }} aria-valuenow={parseInt(props.sData.courses[3][1])} aria-valuemin="0" aria-valuemax={parseInt(props.sData.courses[3][2])}>
                        <span style={{ textAlign: 'right' }}>{`${props.sData.courses[3][1]/parseFloat(props.sData.courses[3][2])*100}%`}</span>
                    </div>
                </div>
                <h2>{props.sData.courses[4][0]}</h2>
                <div className="progress mb-4">
                    <div className="progress-bar custom-progress-bar" role="progressbar" label={`${props.sData.courses[4][1]}%`} style={{ width: `${props.sData.courses[4][1]/parseFloat(props.sData.courses[4][2])*100}%` }} aria-valuenow={parseInt(props.sData.courses[4][1])} aria-valuemin="0" aria-valuemax={parseInt(props.sData.courses[4][2])}>
                        <span style={{ textAlign: 'right' }}>{`${props.sData.courses[4][1]/parseFloat(props.sData.courses[4][2])*100}%`}</span>
                    </div>
                </div>
                <h2>{props.sData.courses[5][0]}</h2>
                <div className="progress mb-4">
                    <div className="progress-bar custom-progress-bar" role="progressbar" label={`${props.sData.courses[5][1]}%`} style={{ width: `${props.sData.courses[5][1]/parseFloat(props.sData.courses[5][2])*100}%` }} aria-valuenow={parseInt(props.sData.courses[5][1])} aria-valuemin="0" aria-valuemax={parseInt(props.sData.courses[5][2])}>
                        <span style={{ textAlign: 'right' }}>{`${props.sData.courses[5][1]/parseFloat(props.sData.courses[5][2])*100}%`}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProgessBar
