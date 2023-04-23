import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
function Achivements() {
    return (
        <Card style={{ marginLeft: '20px', height: '360px', width: '970px', marginTop: '20px', borderRadius: '14px', boxShadow: '0px 10px 30px black', backgroundColor: '#EDF1D6' }}>
            <CardHeader title={Achivements} />
            <CardContent>
                <ul style={{ fontWeight: 'bold', fontSize: '2em' }}>
                    <li>Achivement1</li>
                    <li>Achivement2</li>
                    <li>Achivement3</li>
                    <li>Achivement4</li>
                </ul>
            </CardContent>
        </Card>
    )
}

export default Achivements;