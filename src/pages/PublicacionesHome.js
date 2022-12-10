import * as React from 'react';
import TableComponent from '../components/Table';

import BackgroundLayout from '../Layout/BackgroundLayout';

function createData(title, activePosts, sold, reimbursement, stock) {
  return {
    title,
    activePosts,
    sold,
    reimbursement,
    stock,
  };
}

const rows = [
  createData('Remeras Amarillas', 3, 50, 2, 21),
  createData('Pecheras futbol 5', 4, 18, 3, 15),
  createData('Mesa Ratona', 2, 2, 0, 8),
];

function PublicacionesHome() { 

  return (
    <BackgroundLayout component={<TableComponent rows={rows}/>} />
  )
}


export default PublicacionesHome;