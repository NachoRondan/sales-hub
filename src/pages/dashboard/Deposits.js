import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Recaudado hoy</Title>
      <Typography component="p" variant="h4">
        $366,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        por 2367 ventas
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver balance completo
        </Link>
      </div>
    </React.Fragment>
  );
}
