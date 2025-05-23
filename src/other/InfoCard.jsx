import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const InfoCard = ({placeCard}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={placeCard.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {placeCard.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {placeCard.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default InfoCard
