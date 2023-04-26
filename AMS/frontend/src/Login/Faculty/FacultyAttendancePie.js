import { React, useState } from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function FacultyAttendancePie() {
  // Sample data
  const data = [
    { name: 'Present', value: 77, fill: '#002B5B' },
    { name: 'Absent', value: 23, fill: '#EA5455' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const renderTooltipContent = () => {
    if (activeIndex !== null) {
      const { name, value } = data[activeIndex];
      return (
        <p style={{ color: 'white' }}>
          {name}: {value} days
        </p>
      );
    }
    return null;
  };

  return (
    <Card style={{ height: '270px', width: '475px', borderRadius: '14px', boxShadow: '0px 10px 30px black', backgroundColor: '#EDF1D6' }}>
      <CardHeader title={<Typography variant="h4" fontWeight="bold">Attendance</Typography>} style={{ textAlign: 'center' }} />
      <CardContent style={{ marginLeft: '130px' }}>
        <PieChart width={180} height={170} >
          <Pie data={data} dataKey="value" outerRadius={85} fill={data.color} activeIndex={activeIndex} onMouseEnter={onPieEnter} onMouseLeave={onPieLeave} />
          <Tooltip content={renderTooltipContent} />
        </PieChart>
      </CardContent>

    </Card>
  );
}

export default FacultyAttendancePie;