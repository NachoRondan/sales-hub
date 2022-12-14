import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Switch } from '@mui/material';

import LaunchIcon from '@mui/icons-material/Launch';

function createData(activa, nombre, ventas, precio, plataforma, cuotas) {
  return { activa, nombre, ventas, precio, plataforma, cuotas };
}

const rows = [
  createData(true, 'Remera Amarilla (c. sin interes)', 159, 1500, "MercadoLibre", "Si"),
  createData(true, 'Remera Amarilla (promo navidad)', 237, 1000, "Facebook", "No"),
  createData(true, 'Remera Amarilla + Pantalon Amarillo', 344, 2200, "MercadoLibre", "No"),
  createData(false, 'Remera Amarilla', 305, 1100, "MercadoLibre", "No"),
  createData(true, 'Remera Amarilla', 356, 1100, "MercadoLibre", "No"),
];


export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Activa</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Ventas</TableCell>
            <TableCell align="right">Precio&nbsp;(AR$)</TableCell>
            <TableCell align="right">Plataforma</TableCell>
            <TableCell align="right">Cuotas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Switch color="success" checked={row.activa}/>
              </TableCell>
              <TableCell align="right">{row.nombre}<LaunchIcon/></TableCell>
              <TableCell align="right">{row.ventas}</TableCell>
              <TableCell align="right">{row.precio}</TableCell>
              <TableCell align="center">{row && row.plataforma && row.plataforma === "MercadoLibre" ? <><img src="./meli.png"/>MercadoLibre</> :   <><img src="./fb.png"/>           Facebook</>   }</TableCell>
              <TableCell align="right">{row.cuotas}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}