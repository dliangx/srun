import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import TelegramIcon from '@mui/icons-material/Telegram';

const Nav = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        sx={{
          bgcolor: (theme) => theme.palette.mode === 'dark' ? '#323232' : '#f6f6f6',
        }}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="social" icon={<BlurOnIcon />} />
        <BottomNavigationAction label="running" icon={<DirectionsRunIcon />} />
        <BottomNavigationAction label="chat" icon={<TelegramIcon />} />
        <BottomNavigationAction label="user" icon={<PermIdentityIcon />} />
      </BottomNavigation>
    </Paper>
  );
};
export default Nav;
