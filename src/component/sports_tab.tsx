import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

type SportsTabProps = {
  selectedSport: string;
  onSelectSport: (sport: string) => void;
};

const SportsTab: React.FC<SportsTabProps> = ({ selectedSport, onSelectSport }) => {
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    onSelectSport(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={selectedSport}
        onChange={handleChange}
        aria-label="sports tabs"
      >
        <Tab label="Running" value="running" />
        <Tab label="Cycling" value="cycling" />
        <Tab label="Swimming" value="swimming" />
      </Tabs>
    </Box>
  );
};

export default SportsTab;
