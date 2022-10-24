import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Divider, FormControlLabel, FormGroup, Switch, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const SeleccionarPlataformas=()=>{

const handleSubmit=()=>{console.log("hola")}





return (
<Container component="main" maxWidth="xs">

<Box
  sx={{
    marginTop: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    py:8,
    height:"1"
  }}
>
<Typography variant="h3">
          Seleccione donde publicar
</Typography>
<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    <FormGroup >
      <FormControlLabel control={<Switch />} label={<Typography variant='h4'>Mercado Libre</Typography>} />
      <Divider p={2}/>
      <FormControlLabel control={<Switch />} label={<Typography variant='h4'>Facebook</Typography>} />
      <Divider/>
      <FormControlLabel control={<Switch />} label={<Typography variant='h4'>Instagram</Typography>} />
    </FormGroup>
          <Link to={'/nueva-publicacion/plataformas'} style={{ textDecoration: 'none', color: 'unset' }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Publicar
            </Button>
          </Link>
        </Box>
</Box>
</Container>
)
}