import { useNavigate } from "react-router-dom";

import * as React from "react";
import Box from "@mui/material/Box";

import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import IconButton from '@mui/material/IconButton';

// Componente para normalizar los estilos de la aplicacion en todas sus paginas
// Recibe el componente a mostrar como props.component
const BackgroundLayout = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        minHeight={"512px"}
        display="flex"
        bgcolor="#ffcc00"
        justifyContent={"center"}
        width="full"
        height="full"
        alignItems="center"
        px={8}
      >
        <Box
          px={8}
          py={4}
          sx={{ borderRadius: "16px" }}
          bgcolor="#f5f5f5"
          w={"100%"}
          marginTop={"1em"}
          marginBottom={"1em"}
        >

        
            
 

        <IconButton color="secondary" aria-label="add to shopping cart" onClick={() => {navigate(-1);}}>
          <ArrowBackIcon />
        </IconButton>
                

          {props.component}
        </Box>
      </Box>
    </>
  );
};

export default BackgroundLayout;
