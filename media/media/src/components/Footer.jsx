import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinkMUI from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box component="footer" sx={{
      bgcolor: 'transparent',
      background: (theme) => theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, #232526 0%, #414345 100%)'
        : 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
      color: 'black',
      py: 6,
      mt: 8
    }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h6" fontWeight={800} mb={1}>TaskManager</Typography>
          <Typography variant="body2" color="black">Organize your life, one task at a time.</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight={700} mb={1}>Quick Links</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <LinkMUI component={Link} to="/" color="black" underline="hover">Home</LinkMUI>
            <LinkMUI component={Link} to="/dashboard" color="black" underline="hover">Dashboard</LinkMUI>
            <LinkMUI component={Link} to="/profile" color="black" underline="hover">Profile</LinkMUI>
          </Box>
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight={700} mb={1}>Follow Us</Typography>
          <Box>
            <IconButton color="inherit" component="a" href="https://www.facebook.com/share/19NVf98ZfT/" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" component="a" href="https://www.instagram.com/__mathi_.joe.__/profilecard/?igsh=bzF6bWk5YnQzaGti" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Typography variant="body2" color="black" align="center" sx={{ mt: 4, borderTop: 1, borderColor: 'grey.800', pt: 2 }}>
        &copy; {new Date().getFullYear()} TaskManager. project made for hackathon @ www.katomaran.com
      </Typography>
    </Box>
  );
};

export default Footer;
