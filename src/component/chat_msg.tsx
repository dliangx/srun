import React from 'react';
import { Box, Typography } from '@mui/material';

type ChatMsgProps = {
  message: string;
  sender: string;
  timestamp: string;
  isOwnMessage: boolean;
};

const ChatMsg: React.FC<ChatMsgProps> = ({ message, sender, timestamp, isOwnMessage }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isOwnMessage ? 'flex-end' : 'flex-start',
        margin: '10px',
      }}
    >
      <Typography variant="caption" color="textSecondary">
        {sender} - {timestamp}
      </Typography>
      <Box
        sx={{
          padding: '10px',
          borderRadius: '10px',
          backgroundColor: isOwnMessage ? 'primary.main' : 'grey.300',
          color: isOwnMessage ? 'white' : 'black',
        }}
      >
        <Typography variant="body1">{message}</Typography>
      </Box>
    </Box>
  );
};

export default ChatMsg;
