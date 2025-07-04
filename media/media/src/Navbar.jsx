import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import { motion } from 'framer-motion';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeMode } from './context/ThemeContext';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const { toggleColorMode, mode } = useThemeMode();
  const theme = useTheme();

  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(16px)', background: 'rgba(255,255,255,0.15)' }}>
      <Toolbar sx={{ maxWidth: 1200, mx: 'auto', width: '100%', display: 'flex', justifyContent: 'space-between', py: 2 }}>
        <Typography variant="h4" component={Link} to="/" sx={{ fontWeight: 900, color: '#222', textDecoration: 'none', letterSpacing: 1 }}>
          TaskManager
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton onClick={toggleColorMode} color="inherit" sx={{ ml: 1 }}>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          {user ? (
            <>
              <IconButton component={Link} to="/profile" size="large">
                <Avatar src={`https://i.pravatar.cc/150?u=${user.email}`} alt="User avatar" />
              </IconButton>
              <Button component={Link} to="/dashboard" variant="contained" color="primary">
                Dashboard
              </Button>
              <Button onClick={logout} variant="outlined" color="error">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button component={Link} to="/login" color="primary">
                Login
              </Button>
              <Button component={Link} to="/register" variant="contained" color="success">
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
