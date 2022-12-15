import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import TitlebarImageList from "../components/ImageList";
import BackgroundLayout from "../Layout/BackgroundLayout";
import Pricing from "../components/Pricing";
import LandingMainComponent from "../components/LandingMain";

function LandingHomeComponent() {

  return (
    <Stack spacing={2} alignItems="center">
      <img src="sales-hub-sx.png" alt="logo" />
      <Typography variant="h3" component="h3">Unite a SalesHub! Es fácil</Typography>
      <LandingMainComponent/>
      <Typography variant="h3" component="h3" mt="1em">Publicaciones mas relevantes</Typography>
      <TitlebarImageList/> 
      <Pricing/>
    </Stack>
  );
}

function LandingHome() { 

  return (
    <BackgroundLayout component={<LandingHomeComponent/>} />
  )
}

export default LandingHome;