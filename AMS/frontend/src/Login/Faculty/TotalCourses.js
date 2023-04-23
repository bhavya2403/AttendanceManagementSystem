import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
function TotalCourses() {
    return (
        <Card style={{height: '270px', width:'475px', borderRadius: '14px', boxShadow: '0px 10px 30px black', backgroundColor: '#EDF1D6'}}>
            <CardHeader title={<Typography variant="h2" fontWeight="bold" fontSize= '4em' marginLeft='10px'>2</Typography>}/>
            <CardContent style={{ marginLeft: '40px'}}>
                <p style={{fontSize:'2.75em', fontWeight: 'bold', marginTop: '50px'}}>Total Courses</p>
            </CardContent>
        </Card>
    )
}

export default TotalCourses;