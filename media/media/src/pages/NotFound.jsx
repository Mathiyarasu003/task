import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const NotFound = () => {
  return (
    <Container maxWidth={false} disableGutters sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', px: 0 }}>
      <Box sx={{ textAlign: 'center', width: '100%' }}>
        <Typography variant="h1" fontWeight={900} color="error" gutterBottom>404</Typography>
        <Typography variant="h4" fontWeight={700} gutterBottom>Page Not Found</Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Sorry, the page you are looking for does not exist.
        </Typography>
        <Button component={Link} to="/" variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
          Go Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
