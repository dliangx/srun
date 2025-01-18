import  { useContext } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import TelegramIcon from '@mui/icons-material/Telegram';
import FitbitIcon from '@mui/icons-material/Fitbit';
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
        zIndex: 1000,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={navIndex}
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#1D1D1D' : '#f6f6f6',
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
        <BottomNavigationAction label="Home" icon={<FitbitIcon />} />
        <BottomNavigationAction label="Run" icon={<DirectionsRunIcon />} />
        <BottomNavigationAction label="Chat" icon={<TelegramIcon />} />
        <BottomNavigationAction label="User" icon={<PermIdentityIcon />} />
      </BottomNavigation>
    </Paper>
  );
};
export default Nav;
