import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Empty.css';
import ModalPostagem from '../../postagens/modalPostagem/ModalPostagem';

export default function PostEmpty() {
	return (
		<>
			<Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#f99e29" }}>
				<Grid item xs={5}>
					<Box paddingLeft={8} paddingTop={3} >
						<Typography className='font' variant="h2" gutterBottom color="textPrimary" component="h2" align="left" style={{ color: "#424242", fontWeight: "bold" }}>TRANSFORME HOJE A REALIDADE DE UM BAIRRO.</Typography>
						<Typography className='font' variant="h5" gutterBottom color="textPrimary" component="h5" align="left" style={{ color: "white", fontWeight: "bold" }}>CONTE SUA HISTÓRIA OU ENCONTRE UMA PARA APOIAR.</Typography>
					</Box>
					<Box display="flex" justifyContent="center">
						<Box>
							<Link to='/homelogin' className='text-decorator-none'>
								<Button className='bot' style={{ fontWeight: "bold" }}>Parece que você ainda não tem postagens</Button>
							</Link>
						</Box>
						<Box>
                            <ModalPostagem />   
						</Box>
					</Box>
				</Grid>
				<Grid item xs={7}>
					<Box paddingLeft={12} paddingTop={3}>
						<img src="https://i.imgur.com/WewRlkd.png" alt="" width='650px' height='650px' />
					</Box>
				</Grid>
			</Grid>
		</>
	);
}