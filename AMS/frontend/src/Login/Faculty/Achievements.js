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
                    <li>Description1</li>
                    <li>Description2</li>
                    <li>Description3</li>
                    <li>Description4</li>
                </ul>
            </CardContent>
        </Card>
    )
}

export default Achivements;