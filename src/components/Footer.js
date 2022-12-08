import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


export default function Navbar ({user}){

 
  return (
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{display: 'flex', width: 1, justifyContent: 'space-between', alignItems: 'center' }}>


            <Typography
            underline="none"
              variant="h6"
              noWrap
              sx={{
                fontStyle: 'italic',
                mr: 2,
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              SalesHub
            </Typography>         

          </Box>
        </Toolbar>
      </Container>
  );
};
