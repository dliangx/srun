import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

type UserProfileProps = {
  name: string;
  email: string;
  avatarUrl: string;
};

const UserProfile: React.FC<UserProfileProps> = ({ name, email, avatarUrl }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px',
      }}
    >
      <Avatar src={avatarUrl} sx={{ width: 100, height: 100 }} />
      <Typography variant="h5" sx={{ marginTop: '10px' }}>
        {name}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {email}
      </Typography>
    </Box>
  );
};

export default UserProfile;
