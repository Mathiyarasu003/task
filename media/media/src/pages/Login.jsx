import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate, Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleLoginButton } from 'react-social-login-buttons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    // In a real app, you'd validate the credentials here
    login({ name: 'Test User', email });
    navigate('/dashboard');
  };

  return (
    <Container maxWidth={false} disableGutters sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', px: 0, background: 'none' }}>
      <Box sx={{
        width: '100%',
        maxWidth: 420,
        p: { xs: 2, sm: 4 },
        bgcolor: 'background.paper',
        borderRadius: 6,
        boxShadow: 8,
        mx: 'auto',
        border: '1.5px solid',
        borderColor: 'primary.main',
        backdropFilter: 'blur(16px)',
        background: (theme) => theme.palette.mode === 'dark'
          ? 'rgba(24,26,32,0.85)' : 'rgba(255,255,255,0.85)',
        transition: 'background 0.3s',
      }}>
        <Typography variant="h4" fontWeight={800} align="center" gutterBottom>Welcome Back!</Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth size="large" sx={{ mt: 2, mb: 2 }}>
            Sign In
          </Button>
        </form>
        <GoogleLogin
          onSuccess={credentialResponse => {
            alert('Google Sign In successful!');
          }}
          onError={() => {
            alert('Google Sign In was unsuccessful. Try again later');
          }}
          useOneTap
          render={renderProps => (
            <GoogleLoginButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
              Continue with Google
            </GoogleLoginButton>
          )}
        />
        <Typography align="center" sx={{ mt: 2 }}>
          Don't have an account?{' '}
          <Button component={Link} to="/register" size="small">Sign up</Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
