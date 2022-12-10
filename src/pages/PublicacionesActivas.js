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


function PublicacionesActivasComponent() {

  return (
    <>
      <Stack>
        <Box bgcolor="red">asd</Box>
        <Box bgcolor="green">asd</Box>
        <Box bgcolor="blue">asd</Box>
      </Stack>
    </>
  );
}

function PublicacionesActivas() {
  return <BackgroundLayout component={<PublicacionesActivasComponent />} />;
}

export default PublicacionesActivas;
