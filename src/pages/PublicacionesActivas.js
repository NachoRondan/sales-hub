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
import UnstyledTabsIntroduction from "../components/Tab";


function PublicacionesActivasComponent() {

  return (
        <UnstyledTabsIntroduction/>
  );
}

function PublicacionesActivas() {
  return <BackgroundLayout component={<PublicacionesActivasComponent />} />;
}

export default PublicacionesActivas;
