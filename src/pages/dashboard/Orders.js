import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, producto, name, shipTo, paymentMethod, amount) {
  return { id, date, producto, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "13 Dic, 2022",
    "Jeans Blancos",
    "Carlos Salvaterra",
    "Lomas de Zamora",
    "CREDIT",
    312.44
  ),
  createData(
    1,
    "13 Dic, 2022",
    "Camisa mangalarga",
    "Roberto Fernando",
    "Lanus",
    "DEBIT",
    866.99
  ),
  createData(2, 
    "13 Dic, 2022",
    "Remera amarilla", 
    "Tom Scholz", 
    "Berazategui", 
    "CREDIT", 
    100.81),
  createData(
    3,
    "12 Dic, 2022",
    "Remera lisa blanca",
    "Pepe Alberto",
    "CABA",
    "DEBIT",
    654.39
  ),
  createData(
    4,
    "12 Dic, 2022",
    "Remera lisa blanca",
    "Romeo Santos",
    "Bahia Blanca",
    "DEBIT",
    212.79
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Ultimas ordenes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Producto</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Despacho</TableCell>
            <TableCell>Metodo de Pago</TableCell>
            <TableCell align="right">Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.producto}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
