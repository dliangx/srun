import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

type EventCardProps = {
  title: string;
  date: string;
  description: string;
  onJoin: () => void;
};

const EventCard: React.FC<EventCardProps> = ({ title, date, description, onJoin }) => {
  return (
    <Card sx={{ margin: '10px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {date}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onJoin}>Join</Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
