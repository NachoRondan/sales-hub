import * as React from "react";
import Box from "@mui/material/Box";
import BackgroundLayout from "../Layout/BackgroundLayout";

import {
  Divider,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";

import { Cake, Work } from "@mui/icons-material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";


function PublicacionesActivasComponent() {
  const handleSubmit = () => {
    console.log("hola");
  };

  return (
    <>
      <Grid container spacing={0}>
        <Box
          bgcolor={"f5f5f5"}
          sx={{ p: 2, border: "1px dashed grey" }}
          alignContent={"center"}
          alignItems={"center"}
        >
          <Avatar src={"picture"} sx={{ width: 128, height: 128 }} />


          <Grid container direction="row" alignItems="center">
            <Grid item>
              <AccountCircleIcon></AccountCircleIcon>
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
                control={<Switch />}
                label={<Typography variant="h4">Mercado Libre</Typography>}
              />
              <Divider p={2} />
              <FormControlLabel
                control={<Switch />}
                label={<Typography variant="h4">Facebook</Typography>}
              />
              <Divider />
              <FormControlLabel
                control={<Switch />}
                label={<Typography variant="h4">Instagram</Typography>}
              />
            </FormGroup>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

function PublicacionesActivas() {
  return <BackgroundLayout component={<PublicacionesActivasComponent />} />;
}

export default PublicacionesActivas;
