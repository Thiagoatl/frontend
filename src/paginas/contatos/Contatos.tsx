import React from 'react';
import './Contatos.css';
import CardContact from '../../components/estaticos/cardContact/CardContact';
import Divider from '@mui/material/Divider';

function Contatos() {
    return (
        <>
            <div className='paragrafo'>
                <h1 style={{padding:'5px'}} >Nossa história</h1>
                <>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat facere harum esse adipisci ipsam sint dolore natus necessitatibus vero nam eos provident dolorem ea, ipsa culpa illo deserunt, hic veniam!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat facere harum esse adipisci ipsam sint dolore natus necessitatibus vero nam eos provident dolorem ea, ipsa culpa illo deserunt, hic veniam!</>
            </div>

            <Divider />
            <div className='paragrafo'>
                <>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat facere harum esse adipisci ipsam sint dolore natus necessitatibus vero nam eos provident dolorem ea, ipsa culpa illo deserunt, hic veniam!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat facere harum esse adipisci ipsam sint dolore natus necessitatibus vero nam eos provident dolorem ea, ipsa culpa illo deserunt, hic veniam!</>
                <h1 style={{padding:'5px'}}>Nosso propósito</h1>
            </div>

            <Divider />
            <div className='cards'>
                <CardContact />
                <CardContact />
                <CardContact />
                <CardContact />
                <CardContact />
                <CardContact />
            </div>
        </>
    )
};

export default Contatos;