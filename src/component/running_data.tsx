import React from 'react';
import { Box, Typography } from '@mui/material';

type RunningDataProps = {
  distance: number;
  time: string;
  pace: string;
};

const RunningData: React.FC<RunningDataProps> = ({ distance, time, pace }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10px',
      }}
    >
      <Typography variant="h6">Distance: {distance} km</Typography>
      <Typography variant="h6">Time: {time}</Typography>
      <Typography variant="h6">Pace: {pace} min/km</Typography>
    </Box>
  );
};

export default RunningData;
