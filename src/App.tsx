import Nav from './component/Nav';
import { useSystemTheme } from './hooks/useSystemTheme';
import { ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './page/home';
import User from './page/user';
import Running from './page/running';
import RunningEvent from './page/event';
import ChatDetail from './page/chat';
import MMap from './page/map';
import Login from './page/login';
import Chats from './page/chats';
import { createContext } from 'react';
import React from 'react';

type AppContextType = {
  navIndex: number;
  setNavIndex: (index: number) => void;
};

const AppContext = createContext<AppContextType>({
  navIndex: 0,
  setNavIndex: () => {},
});

function App() {
  const prefersDarkMode = useSystemTheme();
  const [navIndex, setNavIndex] = React.useState(0);
  return (
    <AppContext.Provider
      value={{ navIndex: navIndex, setNavIndex: setNavIndex }}
    >
      <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<RunningEvent />} />
            <Route path="/running" element={<Running />} />
            <Route path="/map" element={<MMap />} />
            <Route path="/chat" element={<Chats />} />
            <Route path="/chat/:id" element={<ChatDetail />} />
            <Route path="/user" element={<User />} />
            <Route path="/login" element={<Login />} />

          </Routes>
          
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export { AppContext };
export default App;
