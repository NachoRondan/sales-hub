import * as React from 'react';
import Box from '@mui/material/Box';
import BackgroundLayout from '../Layout/BackgroundLayout';
import { Grid, Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Label } from '@mui/icons-material';
import { SeleccionarPlataformasComponent } from '../components/SeleccionarPlataformas';

function PerfilComponent() {

  return (
    <>
    <Grid container spacing={0}>
      <Box bgcolor={"white"} sx={{ p: 2, border: '1px dashed grey' }}>
        <Stack>
          <Avatar src={"picture"} sx={{width:254, height:254 }} />
          <Label>Aasd</Label>
          <Label>Aasd</Label>
          <Label>Aasd</Label>
          <Label>Aasd</Label>
          <Label>Aasd</Label>
        </Stack>
      </Box>
      <Box minWidth="512px">
        <SeleccionarPlataformasComponent>

        </SeleccionarPlataformasComponent>
      </Box>
    </Grid>
    </>
  )
}


function Perfil() { 

  return (
    <BackgroundLayout component={<PerfilComponent/>} />
  )
}


export default Perfil;