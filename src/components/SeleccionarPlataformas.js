import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  Button,
  Divider,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
  Modal,
} from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";

import BackgroundLayout from "../Layout/BackgroundLayout";
import { CheckCircleOutline } from "@mui/icons-material";

export function SeleccionarPlataformasComponent(props) {

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate("/mis-publicaciones")
  }

  const handleSubmit = () => {
    console.log("submited!")
    handleOpen();
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 8,
          height: "1",
        }}
      >
        <Typography variant="h3">Seleccione donde publicar</Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <FormGroup>
            <FormControlLabel
              control={<Switch color="success" />}
              label={<Typography variant="h4">Mercado Libre</Typography>}
            />
            <Divider p={2} />
            <FormControlLabel
              control={<Switch color={"success"}  />}
              label={<Typography variant="h4">Facebook</Typography>}
            />
            <Divider />
            <FormControlLabel
              control={<Switch color={"success"} />}
              label={<Typography variant="h4">Instagram</Typography>}
            />
          </FormGroup>
          <Link
            to={"/nueva-publicacion/plataformas"}
            style={{ textDecoration: "none", color: "unset" }}
          >
            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Publicar
            </Button>
          </Link>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CheckCircleOutline sx={{color: "green", fontSize: "100px"}}/>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Publicacion creada!
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
}

export default function SeleccionarPlataformas() {
  


  return (
    <>
      <BackgroundLayout component={<SeleccionarPlataformasComponent />} />

    </>
  );
}
