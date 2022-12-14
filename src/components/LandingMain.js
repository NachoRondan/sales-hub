import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import * as React from 'react';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { AutoGraph } from '@mui/icons-material';



function LandingMainComponent(props) {

    return (
        <React.Fragment>
            <Stack spacing="2">
                <Box
                    bgcolor={"f5f5f5"}
                    sx={{ p: 2, border: "0.5px dashed grey" }}
                    alignContent={"center"}
                    alignItems={"center"}
                    mb="1em"
                >
                    <HowToRegIcon  fontSize="large" color="success"></HowToRegIcon>
                    <Typography variant="h6" component="h6" fontSize={"14"}>
                        1. Registrate
                    </Typography>
                    <Typography variant="h7" component="h7">
                        Crea una cuenta en SalesHub en segundos
                    </Typography>
                </Box>
                <Box
                    bgcolor={"f5f5f5"}
                    sx={{ p: 2, border: "0.5px dashed grey" }}
                    alignContent={"center"}
                    alignItems={"center"}
                    mb="1em"
                >
                    <PostAddIcon  fontSize="large" color="success"></PostAddIcon>
                    <Typography variant="h6" component="h6">
                        2. Publica
                    </Typography>

                    <Typography variant="h7" component="h7">
                        Desde una unica cuenta publica tu producto o articulo en todas las plataformas disponibles
                    </Typography>
                </Box>
                <Box
                    bgcolor={"f5f5f5"}
                    sx={{ p: 2, border: "0.5px dashed grey" }}
                    alignContent={"center"}
                    alignItems={"center"}
                    mb="1em"
                >
                    <AutoGraph fontSize="large" color="success"></AutoGraph>
                    <Typography variant="h6" component="h6">
                        3. Disfruta de la gestion centralizada de stock
                    </Typography>

                    <Typography variant="h7" component="h7">
                        Desde tu perfil vas a poder gestionar todas las publicaciones de un mismo articulo
                    </Typography>
                </Box>
            </Stack>
        </React.Fragment>
    )
}

export default LandingMainComponent;