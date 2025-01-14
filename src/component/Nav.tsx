import React, { useContext } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import TelegramIcon from '@mui/icons-material/Telegram';
import { AppContext } from '../App';
import { useNavigate } from 'react-router';

const Nav = () => {
  const { navIndex, setNavIndex } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '56px',
        zIndex: 1000,
      }}
      elevation={9}
    >
      <BottomNavigation
        showLabels
        value={navIndex}
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#222222' : '#f6f6f6',
        }}
        onChange={(_event, newValue) => {
          setNavIndex(newValue);
          console.log(newValue);
          switch (newValue) {
            case 0:
              navigate('/');
              break;
            case 1:
              navigate('/running');
              break;
            case 2:
              navigate('/chat');
              break;
            case 3:
              navigate('/user');
              break;
            default:
              break;
          }
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
