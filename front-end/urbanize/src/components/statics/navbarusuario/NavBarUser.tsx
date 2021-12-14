import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core';
import { UserState } from '../../../store/user/userReducer';
import { addName, addTipo, addToken } from '../../../store/user/actions';
import './NavBarUser.css';

function NavBarUser() {
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
);
    const name = useSelector<UserState, UserState["names"]>(
        (state) => state.names
    );
    const tipo = useSelector<UserState, UserState["tipos"]>(
        (state) => state.tipos
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        dispatch(addName(''));
        dispatch(addTipo(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/home')
    }
    var navbarComponent;
    var cadastrarTema;
    if(tipo == 'admin'){
        cadastrarTema =   <Link to="/formularioTema" className="text-decorator-none">
        <Box mx={1} className='cursor'>
            <Typography variant="h6" color="inherit">
                cadastrar tema
            </Typography>
        </Box>
    </Link>
    }
    if (token != "") {
        navbarComponent = <AppBar position="static" style={{ backgroundColor: "#f99e29" }}>
            <Toolbar variant="dense">
                <Box className='cursor'>
                <Link to='/home' className='text-decorator-none'>
                    <img src="https://i.imgur.com/mqC0VS2.png" alt="logo urbanize" style={{width: "25vh", height: "5vh" }} />  
                </Link>
                </Box>

                <Box display="flex" justifyContent="start">
                    <Link to="/posts" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                    </Link>

                  {cadastrarTema}
                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box>

                </Box>
            </Toolbar>
        </AppBar>
    } 
    else {
        navbarComponent = <AppBar variant="elevation" style={{ backgroundColor: "#f99e29" }} >
        <Toolbar style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                <Link to='/home' className='text-decorator-none'>
                    <img src="https://i.imgur.com/mqC0VS2.png" alt="logo urbanize" style={{width: "25vh", height: "5vh" }} />  
                </Link>
                <Box paddingLeft={25}>
                    <Link to='/login' className='text-decorator-none'>
                        <Button color="inherit" style={{fontWeight: "bold"}}>Entrar</Button>
                    </Link>                        
                    <Link to='/cadastrar' className='text-decorator-none2'>
                        <Button color="inherit" style={{ fontWeight: "bold" }} className='bot4'>Cadastre-se</Button>
                    </Link>
               </Box>
                </Toolbar>
            </AppBar >
    
    }
    return (
        <>
            {navbarComponent}

        </>
    )
}
export default NavBarUser;