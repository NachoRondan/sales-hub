import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import BackgroundLayout from "../Layout/BackgroundLayout";

function DetalleProductoComponent() {
  const handleSubmit = () => {
    console.log("hola");
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
        <Typography component="h1" variant="h5">
          Detalle del Producto
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="talle"
            label="Talle"
            name="talle"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="marca"
            label="Marca"
            type="marca"
            id="marca"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="correo"
            label="Precio"
            name="precio"
            autoFocus
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            margin="normal"
            required
            fullWidth
            id="fechaVencimiento"
            label="Fecha de Vencimiento"
            name="fechaVencimiento"
            type="date"
            autoFocus
          />
          <Link
            to={"/nueva-publicacion/plataformas"}
            style={{ textDecoration: "none", color: "unset" }}
          >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Seleccionar donde publicar
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default function DetalleProducto() {

  return (
    <BackgroundLayout component={<DetalleProductoComponent/>} />
  )  
}