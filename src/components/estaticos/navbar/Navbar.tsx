import React from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { addToken } from '../../../store/token/Actions';

import {toast} from 'react-toastify';

export default function Navbar() {
    // const [token, setToken] = useLocalStorage('token');
    const dispatch = useDispatch();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )
    let navigate = useNavigate();

    function goLogout() {
        dispatch(addToken(''))
        // alert("Usuário deslogado")
        toast.info('Usuario deslogado',{
            position:"top-right",
            autoClose:2000,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:true,
            draggable:false,
            theme:"colored",
            progress:undefined
        })
        navigate('/login')
    }

    var navbarComponent;
    if (token !== '') {
        navbarComponent =


            <Box sx={{ flexGrow: 1 }}>
                <AppBar className='nav' position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography p={3} variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            Blog Pessoal
                        </Typography>
                        <Box display="flex">
                            <Link to='/home' className='link'>
                                <Typography p={2} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Home
                                </Typography>
                            </Link>
                            <Link to='/postagens' className='link'>
                                <Typography p={2} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Postagens
                                </Typography>
                            </Link>
                            <Link to='/temas' className='link'>
                                <Typography p={2} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Temas
                                </Typography>
                            </Link>
                            <Link to="/formularioTema" className='link'>
                                <Typography p={2} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Cadastrar temas
                                </Typography>
                            </Link>
                        </Box>

                        <Button onClick={goLogout} variant="outlined" disableElevation style={{ color: "#4085aad0", fontWeight: "bolder" }}>Logout</Button>

                    </Toolbar>
                </AppBar>
            </Box>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
};