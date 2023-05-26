import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CardContact.css'

export default function CardContact() {
  return (
    <Card className='cardContact' variant="outlined" sx={{ maxWidth: 200 }}>
      <CardMedia
        sx={{ height: 120 }} 
        image="https://cdn-icons-png.flaticon.com/512/6073/6073873.png"
        title="Integrante Abel"
      />
      <CardContent>
        <Typography  className='titleContact' gutterBottom variant="h5" component="div">
          Pessoa 1
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias aspernatur ad quia nisi id soluta totam omnis iure pariatur architecto, odit repudiandae dolore repellat quas odio suscipit qui quo praesentium?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">LinkedIn</Button>
        <Button size="small">Github</Button>
      </CardActions>
    </Card>
  );
}