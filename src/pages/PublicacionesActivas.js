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
  Stack,
} from "@mui/material";

import { Cake, Work } from "@mui/icons-material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}



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
        


          <Grid container direction="row" alignItems="center">
            <Grid item>
            <Avatar>RF</Avatar>
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
                control={<Switch color={"success"}  />}
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
    </>
  );
}

function PublicacionesActivas() {
  return <BackgroundLayout component={<PublicacionesActivasComponent />} />;
}

export default PublicacionesActivas;
