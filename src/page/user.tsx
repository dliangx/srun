import Container from '@mui/material/Container';
import { invoke } from '@tauri-apps/api/core';
import { useState } from 'react';

const User = () => {
    const [greetMsg, setGreetMsg] = useState('');
    const [name, setName] = useState('');
  
    async function greet() {
      // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
      setGreetMsg(await invoke('greet', { name }));
    }
  return (
    <Container className="container">
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
      <button>Greet</button>
    </form>
    <p>{greetMsg}</p>
    
  </Container>

  );
};

export default User;
