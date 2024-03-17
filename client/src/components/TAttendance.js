import React, { useState } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const TAttendance = () => {
  const [attendanceCode, setAttendanceCode] = useState('');

  const handleGenerateCode = () => {
    const generatedCode = Math.floor(100000 + Math.random() * 900000);
    setAttendanceCode(generatedCode.toString());
  };

  return (
    <Container sx={{border:'solid thick #FC6736', mt:4, backgroundColor:'lavenderblush'}}>
      <Typography variant="h2" component="div" sx={{ mt: 2, mb: 4 }}>
        Attendance
      </Typography>
      {attendanceCode && (
        <Typography variant="body1" sx={{ mb: 2 }}>
          Generated Attendance Code: {attendanceCode}
        </Typography>
      )}
      <Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerateCode}
        sx={{ mt: 2, mb:4 }}
        startIcon={<AssignmentIcon />}
      >
        
        Generate Code
      </Button>
      </Grid>
      <Grid>
      <Button
        variant="contained"
        color="primary"
        sx={{mb:2}}
        
      >
        Disable Code
      </Button>
      </Grid>
      
    </Container>
  );
};

export default TAttendance;
