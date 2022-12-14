import * as React from "react";
import Box from "@mui/material/Box";
import BackgroundLayout from "../Layout/BackgroundLayout";

import {
  Divider,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
  Grid,
} from "@mui/material";

import { Cake, Work } from "@mui/icons-material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import AvatarProfile from "../components/Avatar";





function PerfilComponent() {
  const handleSubmit = () => {
    console.log("hola");
  };

  return (
    <>
        <Box>
      <Grid container spacing={0}>
        <Box
          bgcolor={"f5f5f5"}
          sx={{ p: 2, border: "1px dashed grey" }}
          alignContent={"center"}
          alignItems={"center"}
        >
          
          <AvatarProfile sx={{height: 128, width: 128}}/>
          
          <Grid container direction="row" alignItems="center">
            <Grid item>
           <AccountCircleIcon/>
            </Grid>
            <Grid item>
              <Box
                sx={{ p: 2, border: "1px grey", display: "inline" }}
                mt={"1em"}
                component="div"
              >
                Roberto Fernandez
              </Box>
            </Grid>
          </Grid>



          <Grid container direction="row" alignItems="center">
            <Grid item>
              <Cake/>
            </Grid>
            <Grid item>
              <Box
                sx={{ p: 2, border: "1px grey", display: "inline" }}
                mt={"1em"}
                component="div"
              >
                65 years old
              </Box>
            </Grid>
          </Grid>

          <Grid container direction="row" alignItems="center">
            <Grid item>
              <Work/>
            </Grid>
            <Grid item>
              <Box
                sx={{ p: 2, border: "1px grey", display: "inline" }}
                mt={"1em"}
                component="div"
              >
               Analista de Ventas
              </Box>
            </Grid>
          </Grid>

    
        </Box>
        <Box minWidth="512px" p={"2em"}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Typography variant="h5">Vinculacion de Plataformas</Typography>
            <FormGroup>
              <FormControlLabel
                control={<Switch color={"success"} />}
                label={<Typography variant="h4">Mercado Libre</Typography>}
              />
              <Divider p={2} />
              <FormControlLabel
                control={<Switch color={"success"}  />}
                label={<Typography variant="h4">Facebook</Typography>}
              />
              <Divider />
              <FormControlLabel
                control={<Switch color={"success"}  />}
                label={<Typography variant="h4">Instagram</Typography>}
              />
            </FormGroup>
          </Box>
        </Box>
      </Grid>

  

      </Box>
    </>
  );
}

function Perfil() {
  return <BackgroundLayout title="Perfil" component={<PerfilComponent />} />;
}

export default Perfil;
