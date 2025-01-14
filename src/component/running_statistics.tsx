import React from 'react';
import { Box, Typography } from '@mui/material';

type RunningStatisticsProps = {
  totalDistance: number;
  totalTime: string;
  averagePace: string;
};

const RunningStatistics: React.FC<RunningStatisticsProps> = ({ totalDistance, totalTime, averagePace }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10px',
      }}
    >
      <Typography variant="h6">Total Distance: {totalDistance} km</Typography>
      <Typography variant="h6">Total Time: {totalTime}</Typography>
      <Typography variant="h6">Average Pace: {averagePace} min/km</Typography>
    </Box>
  );
};

export default RunningStatistics;
