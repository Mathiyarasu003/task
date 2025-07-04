import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

const HeroSVG = () => (
  <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="60" rx="90" ry="54" fill="#e3f2fd" />
    <ellipse cx="100" cy="66" rx="72" ry="42" fill="#bbdefb" />
    <ellipse cx="100" cy="72" rx="54" ry="30" fill="#90caf9" />
  </svg>
);

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh', background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #232526 0%, #414345 100%)' : 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 0 }}>
      <Box sx={{
        width: '100%',
        maxWidth: 900,
        mx: 'auto',
        p: { xs: 2, sm: 6, md: 8 },
        borderRadius: 8,
        boxShadow: 16,
        backdropFilter: 'blur(18px)',
        background: (theme) => theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, rgba(24,26,32,0.98) 60%, rgba(34,38,44,0.95) 100%)'
          : 'linear-gradient(135deg, #ffffff 60%, #e0f7fa 100%)',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: { xs: 400, md: 500 },
        gap: { xs: 4, md: 8 },
        transition: 'background 0.3s',
      }}>
        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, maxWidth: { xs: '100%', md: 700 } }}>
          <Fade in timeout={1200}>
            <Box>
              <Typography variant="h1" fontWeight={900} gutterBottom sx={{ fontSize: { xs: 36, sm: 48, md: 64 }, color: 'text.primary' }}>
                Organize Your Life with <Box component="span" sx={{ color: 'primary.main', display: 'inline' }}>TaskManager</Box>
              </Typography>
              <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 600, mb: 4, fontSize: { xs: 20, sm: 28, md: 32 } }} gutterBottom>
                A simple, yet powerful tool to keep track of your tasks and boost your productivity.
              </Typography>
              <Box sx={{ mt: 4, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 2 }}>
                <Button component={Link} to="/login" variant="contained" size="large" sx={{ px: 4, py: 1.5, fontWeight: 700, fontSize: 18, transition: 'background 0.2s', '&:hover': { background: 'secondary.main' } }}>Get Started</Button>
                <Button component={Link} to="/register" variant="outlined" size="large" sx={{ px: 4, py: 1.5, fontWeight: 700, fontSize: 18, borderColor: 'primary.main', color: 'primary.main', transition: 'all 0.2s', '&:hover': { borderColor: 'secondary.main', color: 'secondary.main' } }}>Learn More</Button>
              </Box>
            </Box>
          </Fade>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', mt: { xs: 6, md: 0 }, maxWidth: { xs: '100%', md: 600 } }}>
          <Fade in timeout={1800}>
            <Box>
              <HeroSVG />
            </Box>
          </Fade>
        </Box>
      </Box>
      <Container maxWidth={false} disableGutters sx={{ mb: 10, px: 0 }}>
        <Grid container spacing={4} justifyContent="center" sx={{ mx: 0 }}>
          <Grid item xs={12} md={4}>
            <Card elevation={6} sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' }, borderRadius: 4 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>Login</Typography>
                <Typography color="text.secondary" gutterBottom>Access your account and manage your tasks.</Typography>
                <Button component={Link} to="/login" color="primary">Go to Login →</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={6} sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' }, borderRadius: 4 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>Register</Typography>
                <Typography color="text.secondary" gutterBottom>Create a new account to start organizing your life.</Typography>
                <Button component={Link} to="/register" color="primary">Go to Register →</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={6} sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' }, borderRadius: 4 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>Dashboard</Typography>
                <Typography color="text.secondary" gutterBottom>View and manage all your tasks in one place.</Typography>
                <Button component={Link} to="/dashboard" color="primary">Go to Dashboard →</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
