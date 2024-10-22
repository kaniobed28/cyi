// NotFound.js
import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" component="h1">
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" style={{ margin: '20px 0' }}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button variant="contained" component={Link} to="/home">
        Go to Home
      </Button>
    </div>
  );
};

export default NotFound;
