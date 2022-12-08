import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Stack, Typography, Button } from '@mui/material';
import Search from './Search';
import { Link } from 'react-router-dom';

import BackgroundLayout from '../Layout/BackgroundLayout';

function SeleccionarCategoriaComponent() {

  const categorias = ['Inmuebles','Calzado','Indumentaria','Vehiculos','Gaming','Tecnologia','Articulos de Limpieza','Electrodomesticos','Hogar']
 


  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'flex-end'}} p={2}>
      <Stack marginBottom={3}>
        <Box marginBottom={3}>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
              <Typography variant='h3'>Seleccionar Categoria</Typography>
              <Search/>
          </Stack>
          <Typography >Debe seleccionar su categoria para poder continuar</Typography>
        </Box>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {categorias.map((categoria) => (
            <Grid item xs={2} sm={4} md={4} key={categoria}>
              <Button component={Link} to={'/nueva-publicacion/subcategoria'} sx={{width:'300px', height:'100px'}} color='secondary' variant='outlined'>{categoria}</Button>
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Box flex={12} sx={{ display: 'flex', justifyContent:'center'}}>
        <Button variant='outlined' color='info'>Cancelar</Button>
      </Box>
    </Box>
  );
}

export default function SeleccionarCategoria() { 
  
  return (
    <BackgroundLayout component={<SeleccionarCategoriaComponent/>} />
  )
}