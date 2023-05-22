import React from 'react';
import './Home.css';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';



export default function Home() {
    return (
        <>
         <Grid container direction="row" justifyContent="center" alignItems="center" className='bemVindo'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom  component="h3" align="center" style={{ color: "#03045E", fontWeight: "bold" }}>Bem vindo(a) ao Able!</Typography>
                        <Typography variant="h5" gutterBottom  component="h5" align="center" style={{ color: "#03045E", fontWeight: "bold" }}>O objetivo da educação inclusiva 
                        não é tornar todas as crianças iguais, e sim respeitar e valorizar as diferenças. </Typography>
                    </Box>
                    <Box display="block" justifyContent="center">
                        <Box marginRight={1} marginTop={3}>
                        </Box>
                        <Button variant="outlined" className='buttonPost' style={{ border: " 2px solid black", backgroundColor: "#0077B6", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src='https://i.imgur.com/YRDyoGr.png' alt="" width="500px" height="500px" />
                </Grid>
            </Grid>
          
        </>)

};