import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { invoke } from '@tauri-apps/api/core';
import Nav from './component/Nav';
import { useSystemTheme } from './hooks/useSystemTheme';
import { ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import './App.css';

function App() {
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');
  const prefersDarkMode = useSystemTheme();

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke('greet', { name }));
  }

  return (
    <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
      <div>
        <form
          className="row"
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="submit">Greet</button>
        </form>
        <p>{greetMsg}</p>
        <Nav />
      </div>
    </ThemeProvider>
  );
}

export default App;
