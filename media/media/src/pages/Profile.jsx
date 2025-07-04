import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { motion } from 'framer-motion';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <Container maxWidth="sm" sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h5" fontWeight={700} color="text.secondary" align="center">
          Please log in to view your profile.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth={false} disableGutters sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', px: 0 }}>
      <Box sx={{ width: '100%', maxWidth: 600, p: 4, bgcolor: 'background.paper', borderRadius: 4, boxShadow: 3, mx: 'auto' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Avatar
            src={`https://i.pravatar.cc/150?u=${user.email}`}
            alt="User avatar"
            sx={{ width: 120, height: 120, mx: 'auto', mb: 3, border: '4px solid', borderColor: 'primary.main' }}
          />
          <Typography variant="h4" fontWeight={800}>{user.name}</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>{user.email}</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
