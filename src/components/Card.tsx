import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material'





export default function ActionCard(props:any){

  return (
    <Card sx={{ minHeight: 500, maxHeight: 550 , maxWidth: 550, minWidth: 500, margin: '15px', overflow:'auto' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.imageUrl}
          alt="pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
